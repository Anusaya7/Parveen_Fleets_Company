<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LeadController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->validate([
            'status' => 'sometimes|in:New,In Discussion,Proposal Sent,Won,Cancelled',
            'city' => 'sometimes|string|max:120',
            'page' => 'sometimes|integer|min:1',
        ]);

        $leads = Lead::query()
            ->when($filters['status'] ?? null, fn ($query, $status) => $query->where('status', $status))
            ->when($filters['city'] ?? null, fn ($query, $city) => $query->where('city', 'like', '%' . $city . '%'))
            ->latest()
            ->paginate(25);

        return response()->json([
            'success' => true,
            'message' => 'Leads retrieved successfully.',
            'data' => $leads->items(),
            'meta' => [
                'current_page' => $leads->currentPage(),
                'last_page' => $leads->lastPage(),
                'per_page' => $leads->perPage(),
                'total' => $leads->total(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'company' => 'required|string|max:200',
            'phone' => 'required|string|max:20',
            'email' => 'required|email:rfc|max:254',
            'service' => 'required|string|max:150',
            'city' => 'required|string|max:120',
            'fleet_size' => 'nullable|string|max:120',
            'message' => 'nullable|string|max:5000',
        ]);

        $lead = Lead::create([
            ...$validated,
            'lead_code' => 'PF-LEAD-' . Str::upper(Str::random(8)),
            'ip_address' => $request->ip(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Your corporate transportation request has been logged successfully.',
            'data' => $lead,
        ], 201);
    }

    public function show(string $id)
    {
        return response()->json([
            'success' => true,
            'data' => Lead::findOrFail($id),
        ]);
    }

    public function updateStatus(Request $request, string $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:New,In Discussion,Proposal Sent,Won,Cancelled'
        ]);

        $lead = Lead::findOrFail($id);
        $lead->update($validated);

        return response()->json([
            'success' => true,
            'message' => "Lead {$lead->lead_code} status updated.",
            'data' => $lead->fresh(),
        ]);
    }

    public function exportExcel()
    {
        return response()->streamDownload(function () {
            $output = fopen('php://output', 'w');
            $safeCell = static function ($value): string {
                $value = (string) ($value ?? '');
                return preg_match('/^[\x00-\x20]*[=+\-@]/', $value) ? "'" . $value : $value;
            };
            fputcsv($output, ['ID', 'Name', 'Company', 'Phone', 'Email', 'Service', 'City', 'Fleet size', 'Status', 'Date', 'Message']);

            Lead::query()->latest()->chunk(500, function ($leads) use ($output, $safeCell) {
                foreach ($leads as $lead) {
                    fputcsv($output, [
                        $safeCell($lead->lead_code),
                        $safeCell($lead->name),
                        $safeCell($lead->company),
                        $safeCell($lead->phone),
                        $safeCell($lead->email),
                        $safeCell($lead->service),
                        $safeCell($lead->city),
                        $safeCell($lead->fleet_size),
                        $safeCell($lead->status),
                        $safeCell($lead->created_at?->toDateString()),
                        $safeCell($lead->message),
                    ]);
                }
            });

            fclose($output);
        }, 'Parveen_Fleets_Leads_Report.csv', [
            'Content-Type' => 'text/csv; charset=UTF-8',
        ]);
    }

    public function destroy(string $id)
    {
        $lead = Lead::findOrFail($id);
        $lead->delete();

        return response()->json([
            'success' => true,
            'message' => 'Lead deleted successfully.',
        ]);
    }
}
