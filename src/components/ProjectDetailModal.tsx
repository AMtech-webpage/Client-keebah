import React, { useState } from 'react';
import { PortfolioProject } from '../types/portfolio';
import { X, Calendar, CheckSquare, FileText, Clock, ExternalLink, Copy, Check, Filter } from 'lucide-react';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');
  const [calendarCategory, setCalendarCategory] = useState<string>('all');
  const [spreadsheetFilter, setSpreadsheetFilter] = useState<string>('all');
  const [selectedDocId, setSelectedDocId] = useState<string>('meeting-recap');
  const [copiedDoc, setCopiedDoc] = useState(false);

  if (!project) return null;

  // Calendar mock data
  const calendarEvents = [
    { id: 1, time: '08:00 - 09:00', title: 'Daily Inbox Triage & Priority Flagging', category: 'Admin', type: 'routine', duration: '60 min', buffer: '15 min buffer applied', notes: 'Review unread emails, tag urgent client messages, prepare morning briefing.' },
    { id: 2, time: '09:15 - 10:15', title: 'Executive Sync: Q4 Strategy & Milestones', category: 'Strategy', type: 'high-priority', duration: '60 min', buffer: '15 min buffer applied', notes: 'Google Meet link verified, slide deck pre-loaded, agenda distributed.' },
    { id: 3, time: '10:30 - 11:30', title: 'Client Consultation: Project Onboarding', category: 'Client', type: 'external', duration: '60 min', buffer: '30 min buffer applied', notes: 'Time-zone verified (EST/GMT), welcome questionnaire sent in advance.' },
    { id: 4, time: '12:00 - 12:45', title: 'Internal Operations & Vendor Review', category: 'Operations', type: 'internal', duration: '45 min', buffer: '15 min buffer applied', notes: 'Review pending invoice submissions and supplier contracts.' },
    { id: 5, time: '13:00 - 14:00', title: 'Mindful Lunch & Screen Break', category: 'Wellness', type: 'break', duration: '60 min', buffer: 'No meetings allowed', notes: 'Protected rest block to prevent afternoon fatigue.' },
    { id: 6, time: '14:00 - 15:45', title: 'Protected Deep Work: Presentation Prep', category: 'Deep Work', type: 'focus', duration: '105 min', buffer: 'Protected block', notes: 'Slack notifications snoozed; uninterrupted slide formatting.' },
    { id: 7, time: '16:00 - 16:30', title: 'Weekly Team Huddle & Standup', category: 'Operations', type: 'internal', duration: '30 min', buffer: '15 min buffer applied', notes: 'Quick round of blockers, task completions, and tomorrow\'s priorities.' },
    { id: 8, time: '16:45 - 17:30', title: 'Daily Wrap-up, Next Day Prep & Inbox Zero', category: 'Admin', type: 'routine', duration: '45 min', buffer: 'End of day', notes: 'Confirm tomorrow\'s calendar, archive answered threads, log hours.' },
  ];

  const filteredCalendar = calendarCategory === 'all'
    ? calendarEvents
    : calendarEvents.filter(e => e.category.toLowerCase() === calendarCategory.toLowerCase());

  // Spreadsheet mock data
  const spreadsheetRows = [
    { id: 'TSK-101', task: 'Q3 Budget Review & Receipt Collation', category: 'Finance Admin', priority: 'High', status: 'Completed', deadline: 'Aug 12, 2026', owner: 'Executive / A. Rokibat', notes: 'All receipts matched with bank statement' },
    { id: 'TSK-102', task: 'Project Alpha Client Onboarding Brief', category: 'Client Care', priority: 'High', status: 'In Progress', deadline: 'Aug 15, 2026', owner: 'A. Rokibat (VA)', notes: 'Awaiting client logo assets' },
    { id: 'TSK-103', task: 'Weekly Executive Team Sync Minutes', category: 'Documentation', priority: 'Medium', status: 'Completed', deadline: 'Aug 14, 2026', owner: 'A. Rokibat (VA)', notes: 'Summary doc circulated to team' },
    { id: 'TSK-104', task: 'Vendor Contract Comparison (3 Quotes)', category: 'Research', priority: 'Medium', status: 'Scheduled', deadline: 'Aug 18, 2026', owner: 'A. Rokibat (VA)', notes: 'Quotes requested from suppliers' },
    { id: 'TSK-105', task: 'CRM Lead Directory Cleanup (150 contacts)', category: 'Data Entry', priority: 'Low', status: 'In Progress', deadline: 'Aug 20, 2026', owner: 'A. Rokibat (VA)', notes: 'Phone and email validation ongoing' },
    { id: 'TSK-106', task: 'Executive Travel Itinerary & Hotel Booking', category: 'Logistics', priority: 'High', status: 'Pending', deadline: 'Aug 22, 2026', owner: 'Executive approval', notes: 'Flight options sent for review' },
    { id: 'TSK-107', task: 'Social Media Post Asset Collation', category: 'Social Media', priority: 'Low', status: 'Scheduled', deadline: 'Aug 25, 2026', owner: 'A. Rokibat (VA)', notes: 'Drafting 4 post captions in Notion' },
  ];

  const filteredRows = spreadsheetFilter === 'all'
    ? spreadsheetRows
    : spreadsheetRows.filter(r => r.status.toLowerCase() === spreadsheetFilter.toLowerCase());

  // Sample Documents
  const sampleDocuments: Record<string, { title: string; subtitle: string; content: string }> = {
    'meeting-recap': {
      title: 'EXECUTIVE MEETING MINUTES & ACTION RECAP',
      subtitle: 'Standardized post-meeting briefing for executive leadership & attendees',
      content: `DATE: August 14, 2026
MEETING PURPOSE: Q3 Strategic Operations & Deliverables Review
CHAIR / FACILITATOR: Executive Director
NOTE-TAKER / VA: Abdul Salam Rokibat

ATTENDEES:
· Alexander Wright (Lead Strategist)
· Sarah Jenkins (Operations Lead)
· Abdul Salam Rokibat (Virtual Assistant / Minutes)

1. KEY DISCUSSION POINTS:
- Reviewed project roadmap and delivery timelines; confirmed on track for August 30.
- Identified bottleneck in supplier onboarding due to missing tax forms.
- Approved transition of routine customer inquiries to updated FAQ response matrix.

2. DECISIONS REACHED:
- All external client calls will now have mandatory 15-minute buffer windows.
- New CRM leads will be sanitized and standardized by the VA on a daily schedule.

3. ACTION ITEMS & ACCOUNTABILITY:
[✓] Sarah J. → Circulate revised vendor contract terms by Aug 16.
[✓] Abdul S. R. → Finalize client onboarding brief template and upload to Drive by Aug 15.
[✓] Alex W. → Sign off on software trial budget by Aug 18.

NEXT MEETING: Thursday, August 21, 2026 at 10:00 AM EST (Google Meet)`,
    },
    'onboarding-kit': {
      title: 'CLIENT ONBOARDING & WELCOME BRIEF',
      subtitle: 'Structured intake document to establish seamless client-VA collaboration',
      content: `WELCOME TO OUR VIRTUAL ASSISTANCE COLLABORATION!

Dear Client,

Thank you for the opportunity to support your workflow. To ensure our collaboration is smooth, dependable, and efficient from day one, here is a quick overview of our working guidelines.

1. COMMUNICATION CHANNELS:
· Primary Work Requests: Email (tasks submitted via shared inbox or task tracker).
· Quick Clarifications: Slack / Messaging (Mon–Fri, 9:00 AM – 5:00 PM).
· Weekly Touchpoint: 20-minute video sync every Monday morning.

2. TASK SUBMISSION BEST PRACTICES:
· Please include task objective, due date, and any relevant source files.
· Urgent items (< 24hr deadline) should be marked [URGENT] in the subject line.

3. ACCESS & SECURITY CHECKLIST:
[ ] 1Password / LastPass shared vault for tool credentials
[ ] Google Workspace or Dropbox shared folder invite
[ ] Calendar delegate or editing permissions

4. STANDARD TURNAROUND EXPECTATIONS:
· Routine administrative tasks: 24–48 hours
· Daily inbox and calendar monitoring: Completed by 9:30 AM each business day
· Research summaries and custom spreadsheets: 3 business days

I look forward to making your workweek more organized and stress-free!

Warm regards,
Abdul Salam Rokibat
Virtual Assistant`,
    },
    'followup-memo': {
      title: 'POLITE CLIENT FOLLOW-UP & STATUS UPDATE',
      subtitle: 'Courteous correspondence template for pending documents and project status',
      content: `SUBJECT: Follow-up on [Project Name] / Awaiting Review on [Item]

Dear [Client Name],

I hope you are having a productive week.

I am checking in regarding the [Draft Document / Contract / Presentation] sent over on [Date]. Whenever you have a quiet moment to review, please let me know if you would like any edits or additional adjustments.

For your convenience, here is a quick recap of the current state:
· Completed: Initial draft, typography cleanup, and data verification
· Pending: Your sign-off on Section 3 (Deliverables & Budget)
· Direct link to document: [Drive Link]

If you would prefer to review this together, I would be glad to set up a brief 10-minute touchpoint at your convenience.

Thank you so much for your time!

Warm regards,
Abdul Salam Rokibat
Virtual Assistant`,
    },
  };

  const handleCopyDoc = () => {
    const text = sampleDocuments[selectedDocId]?.content || '';
    navigator.clipboard.writeText(text);
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFDF7] rounded-2xl border border-[#C8A96A]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#38271F]/10 bg-[#FAF6EE]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6F4E37] bg-[#FFF1C1] px-2.5 py-1 rounded">
              {project.badgeLabel}
            </span>
            <span className="text-xs text-[#6F4E37]/70">·</span>
            <span className="text-xs text-[#6F4E37]/80 font-medium">Category: {project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#38271F]/70 hover:text-[#38271F] hover:bg-[#FFF1C1]/60 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Title Bar */}
        <div className="px-6 pt-5 pb-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#38271F]">
            {project.title}
          </h2>
          <p className="text-sm text-[#38271F]/80 mt-1">
            {project.shortDescription}
          </p>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mt-4 border-b border-[#38271F]/10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'overview'
                  ? 'border-[#6F4E37] text-[#6F4E37] font-semibold'
                  : 'border-transparent text-[#38271F]/60 hover:text-[#38271F]'
              }`}
            >
              Project Overview & Methodology
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'border-[#6F4E37] text-[#6F4E37] font-semibold'
                  : 'border-transparent text-[#38271F]/60 hover:text-[#38271F]'
              }`}
            >
              <span>Interactive Sample Artifact</span>
              <span className="text-[10px] bg-[#C8A96A]/20 text-[#6F4E37] px-1.5 py-0.5 rounded font-mono">
                Live Preview
              </span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Thumbnail Image */}
              <div className="relative rounded-xl overflow-hidden border border-[#C8A96A]/30 bg-[#FAF6EE] shadow-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#38271F]/85 text-[#FFFDF7] text-xs px-3 py-1.5 rounded backdrop-blur-xs flex items-center gap-2">
                  <span>Practice Artifact by Abdul Salam Rokibat</span>
                  <span>·</span>
                  <span className="text-[#FFF1C1]">Designed for Virtual Support Workflows</span>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-base font-serif font-semibold text-[#6F4E37] mb-2">
                  Purpose & Background
                </h3>
                <p className="text-sm text-[#38271F]/85 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Grid: Objectives & Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/25">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6F4E37] mb-3 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#C8A96A]" />
                    Key Objectives Demonstrated
                  </h4>
                  <ul className="space-y-2 text-xs text-[#38271F]/85">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#6F4E37] font-bold mt-0.5">·</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/25">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6F4E37] mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C8A96A]" />
                    Structure & Workflow Highlights
                  </h4>
                  <ul className="space-y-2 text-xs text-[#38271F]/85">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#6F4E37] font-bold mt-0.5">·</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools Used */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#6F4E37] uppercase tracking-wider block mb-2">
                  Tools & Platforms Practiced
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-[#38271F]">
                  {project.toolsUsed.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#FFFDF7] border border-[#C8A96A]/40 text-[#38271F] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Live Artifact Tab */
            <div className="space-y-4">
              {project.previewType === 'calendar' && (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 bg-[#FAF6EE] rounded-xl border border-[#C8A96A]/30">
                    <div>
                      <p className="text-xs font-bold text-[#6F4E37] uppercase tracking-wider">
                        Interactive Executive Day Agenda
                      </p>
                      <p className="text-xs text-[#38271F]/70">
                        Filter by schedule type to examine how buffer times and deep work slots are orchestrated.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#38271F]/60 mr-1 flex items-center gap-1">
                        <Filter className="w-3.5 h-3.5" /> Filter:
                      </span>
                      {['all', 'Admin', 'Strategy', 'Client', 'Deep Work'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setCalendarCategory(cat)}
                          className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                            calendarCategory.toLowerCase() === cat.toLowerCase()
                              ? 'bg-[#6F4E37] text-white font-medium'
                              : 'bg-white border border-[#38271F]/15 text-[#38271F]/70 hover:text-[#38271F]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar Items Timeline */}
                  <div className="space-y-2.5">
                    {filteredCalendar.map(evt => (
                      <div
                        key={evt.id}
                        className="p-3.5 rounded-xl border border-[#C8A96A]/30 bg-white hover:border-[#6F4E37]/50 transition-all shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <div className="shrink-0 w-28 text-xs font-mono font-semibold text-[#6F4E37] bg-[#FFF1C1]/60 px-2.5 py-1 rounded border border-[#C8A96A]/20">
                            {evt.time}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#38271F]">
                              {evt.title}
                            </h4>
                            <p className="text-xs text-[#38271F]/70 mt-0.5">
                              {evt.notes}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                          <span className="text-xs px-2 py-0.5 rounded bg-[#FAF6EE] border border-[#38271F]/10 text-[#6F4E37] font-medium">
                            {evt.category}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-[#FFFDF7] border border-[#C8A96A]/30 text-[#A88849] font-mono">
                            {evt.buffer}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-[#FAF6EE] rounded-lg text-xs text-[#38271F]/80 border border-[#C8A96A]/20">
                    <span className="font-semibold text-[#6F4E37]">VA Best Practice Highlight: </span>
                    Never schedule back-to-back executive meetings without at least 15 minutes of buffer time for mental reset, biological breaks, and task note-taking.
                  </div>
                </div>
              )}

              {project.previewType === 'spreadsheet' && (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 bg-[#FAF6EE] rounded-xl border border-[#C8A96A]/30">
                    <div>
                      <p className="text-xs font-bold text-[#6F4E37] uppercase tracking-wider">
                        Interactive Task & Deliverable Tracker
                      </p>
                      <p className="text-xs text-[#38271F]/70">
                        Shows clear task numbering, priority hierarchy, status pipelines, and accountability logs.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#38271F]/60 mr-1 flex items-center gap-1">
                        <Filter className="w-3.5 h-3.5" /> Status:
                      </span>
                      {['all', 'Completed', 'In Progress', 'Scheduled', 'Pending'].map(status => (
                        <button
                          key={status}
                          onClick={() => setSpreadsheetFilter(status)}
                          className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                            spreadsheetFilter.toLowerCase() === status.toLowerCase()
                              ? 'bg-[#6F4E37] text-white font-medium'
                              : 'bg-white border border-[#38271F]/15 text-[#38271F]/70 hover:text-[#38271F]'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Spreadsheet Table */}
                  <div className="overflow-x-auto rounded-xl border border-[#C8A96A]/30 bg-white">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#FAF6EE] border-b border-[#38271F]/10 text-[#6F4E37] font-semibold">
                          <th className="py-2.5 px-3 font-mono">ID</th>
                          <th className="py-2.5 px-3">Task Name</th>
                          <th className="py-2.5 px-3">Category</th>
                          <th className="py-2.5 px-3">Priority</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3">Deadline</th>
                          <th className="py-2.5 px-3">Owner / Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#38271F]/5 text-[#38271F]">
                        {filteredRows.map(row => (
                          <tr key={row.id} className="hover:bg-[#FAF6EE]/50 transition-colors">
                            <td className="py-2.5 px-3 font-mono text-[#6F4E37]">{row.id}</td>
                            <td className="py-2.5 px-3 font-medium">{row.task}</td>
                            <td className="py-2.5 px-3 text-[#38271F]/70">{row.category}</td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                                  row.priority === 'High'
                                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                    : row.priority === 'Medium'
                                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                    : 'bg-slate-50 text-slate-700 border border-slate-200'
                                }`}
                              >
                                {row.priority}
                              </span>
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                                  row.status === 'Completed'
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                    : row.status === 'In Progress'
                                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                    : row.status === 'Scheduled'
                                    ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-mono text-[#38271F]/80">{row.deadline}</td>
                            <td className="py-2.5 px-3 text-[#38271F]/80">{row.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 bg-[#FAF6EE] rounded-lg text-xs text-[#38271F]/80 border border-[#C8A96A]/20">
                    <span className="font-semibold text-[#6F4E37]">VA Best Practice Highlight: </span>
                    Standardizing column headers and status pipelines guarantees that both the client and assistant can identify urgent deliverables within 5 seconds of opening the sheet.
                  </div>
                </div>
              )}

              {project.previewType === 'document' && (
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 bg-[#FAF6EE] rounded-xl border border-[#C8A96A]/30">
                    <div>
                      <p className="text-xs font-bold text-[#6F4E37] uppercase tracking-wider">
                        Interactive Template Document Kit
                      </p>
                      <p className="text-xs text-[#38271F]/70">
                        Select a template to view the formatting structure, clear headings, and scannable layout.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyDoc}
                        className="inline-flex items-center gap-1.5 text-xs bg-[#6F4E37] text-white px-3 py-1.5 rounded-lg hover:bg-[#38271F] transition-colors"
                      >
                        {copiedDoc ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedDoc ? 'Copied to Clipboard' : 'Copy Sample Text'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Document Selector Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      { id: 'meeting-recap', label: '1. Executive Meeting Minutes' },
                      { id: 'onboarding-kit', label: '2. Client Onboarding Brief' },
                      { id: 'followup-memo', label: '3. Polite Follow-Up Template' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedDocId(tab.id)}
                        className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                          selectedDocId === tab.id
                            ? 'bg-[#6F4E37] text-white font-semibold'
                            : 'bg-white border border-[#38271F]/15 text-[#38271F]/80 hover:text-[#38271F]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Document View Canvas */}
                  <div className="bg-[#FFFDF7] p-6 rounded-xl border border-[#C8A96A]/30 shadow-xs font-mono text-xs leading-relaxed text-[#38271F] whitespace-pre-wrap max-h-96 overflow-y-auto">
                    {sampleDocuments[selectedDocId]?.content}
                  </div>

                  <div className="mt-4 p-3 bg-[#FAF6EE] rounded-lg text-xs text-[#38271F]/80 border border-[#C8A96A]/20">
                    <span className="font-semibold text-[#6F4E37]">VA Best Practice Highlight: </span>
                    All executive documents are formatted with high contrast, explicit bullet points, action item owner tags, and clear next steps to preserve client time.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#38271F]/10 bg-[#FAF6EE]">
          <div className="text-xs text-[#38271F]/70">
            Practice project developed by <span className="font-medium text-[#6F4E37]">Abdul Salam Rokibat</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#38271F] bg-white border border-[#38271F]/20 rounded-lg hover:bg-[#FFFDF7] transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
