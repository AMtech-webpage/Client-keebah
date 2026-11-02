import { ProfileData, ServiceItem, SkillItem, PortfolioProject } from '../types/portfolio';

export const DEFAULT_PROFILE: ProfileData = {
  name: "Abdul Salam Rokibat",
  roleTitle: "ASPIRING VIRTUAL ASSISTANT",
  headline: "Helping You Stay Organised, So You Can Focus on What Matters.",
  shortIntro:
    "Developing practical Virtual Assistant skills with a commitment to supporting busy professionals, independent creators, and growing businesses through dependable, well-organised virtual assistance.",
  aboutText:
    "Hello, I’m Abdul Salam Rokibat, an aspiring Virtual Assistant passionate about organisation, productivity, and helping people work more efficiently. I’m currently developing my skills and exploring ways to provide reliable virtual support to busy professionals and growing businesses. My goal is to make everyday tasks easier, help keep things organised, and contribute positively to the people I work with.",
  email: "contact@abdulsalamrokibat.com",
  linkedInUrl: "https://linkedin.com/in/abdulsalamrokibat-placeholder",
  whatsAppNumber: "", // Empty placeholder until user configures a real WhatsApp number
  isWhatsAppActive: false,
  location: "Remote / Global Timezones",
  availability: "Open to Practice Projects & Entry-Level Opportunities",
};

export const VALUE_HIGHLIGHTS = [
  {
    title: "Organised & Detail-Oriented",
    description:
      "Careful attention to file naming, calendar buffers, formatting consistency, and structured checklists to avoid overlooked details.",
    icon: "CheckCircle2",
  },
  {
    title: "Eager to Learn & Grow",
    description:
      "Quick to adopt client-specific software, internal SOPs, and feedback with an open, proactive mindset.",
    icon: "GraduationCap",
  },
  {
    title: "Committed to Reliable Support",
    description:
      "Clear communication on task progress, respect for agreed timelines, and dependable follow-through.",
    icon: "Clock",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "admin-support",
    title: "Administrative Support",
    shortDescription:
      "Organising essential information, handling everyday digital documentation, and assisting with routine administrative tasks.",
    fullDescription:
      "Foundational day-to-day administrative assistance tailored to maintain order in your daily workflow. I assist with digital file hierarchy, meeting coordination, note-taking, and routine operational tasks.",
    status: "Core Focus",
    icon: "FolderKanban",
    deliverables: [
      "Digital folder structuring and file reorganization (Google Drive, Dropbox)",
      "Meeting preparation agendas and action-item documentation",
      "Routine task tracking and daily operational checklists",
      "Basic invoice collation and receipt archiving",
    ],
    toolsUsed: ["Google Workspace", "Notion", "Trello", "Dropbox"],
    enabled: true,
  },
  {
    id: "email-calendar",
    title: "Email & Calendar Management",
    shortDescription:
      "Helping organise inboxes, appointments, schedules, and reminders to prevent missed deadlines and double-bookings.",
    fullDescription:
      "Structured schedule maintenance and communication triage. I help declutter overflowing inboxes with intuitive label systems and establish balanced calendars with proper buffer times.",
    status: "Core Focus",
    icon: "CalendarCheck",
    deliverables: [
      "Inbox zero triage: labeling, archiving, and flagging priority emails",
      "Appointment scheduling and cross-timezone calendar coordination",
      "Buffer time implementation between consecutive calls",
      "Drafting routine replies and reminder notifications",
    ],
    toolsUsed: ["Google Calendar", "Outlook", "Calendly", "Gmail"],
    enabled: true,
  },
  {
    id: "data-research",
    title: "Data Entry & Research",
    shortDescription:
      "Entering information accurately and gathering useful market, contact, or operational insights.",
    fullDescription:
      "Meticulous data entry and structured internet research. Whether collecting vendor contacts, comparing software options, or updating client logs, I prioritize accuracy and clean formatting.",
    status: "Developing",
    icon: "Search",
    deliverables: [
      "Contact and lead list verification with phone, email, and social profiles",
      "Comparative vendor, price, and competitor desk research",
      "Spreadsheet data cleaning and standardizing formatting",
      "Simple research summary memos with source citations",
    ],
    toolsUsed: ["Google Sheets", "Microsoft Excel", "Airtable", "Web Search"],
    enabled: true,
  },
  {
    id: "doc-formatting",
    title: "Document Formatting",
    shortDescription:
      "Creating clean, organised, professional-looking documents with consistent headings, tables, and typography.",
    fullDescription:
      "Transforming raw drafts into polished, client-ready documents. I apply consistent brand font hierarchy, clean line spacing, table layouts, and export-ready PDF formatting.",
    status: "Developing",
    icon: "FileText",
    deliverables: [
      "Standard Operating Procedure (SOP) styling and formatting",
      "Executive meeting minute summaries and presentation decks",
      "Form and checklist layout design in Google Docs / Word",
      "Converting scattered notes into structured PDF briefs",
    ],
    toolsUsed: ["Google Docs", "Microsoft Word", "Canva", "Adobe Acrobat"],
    enabled: true,
  },
  {
    id: "social-media",
    title: "Social Media Assistance",
    shortDescription:
      "Assisting with content scheduling, hashtag research, and basic social media organisation.",
    fullDescription:
      "Supporting content creators and founders with steady publishing logistics. I organize weekly content calendars, draft basic post captions from briefs, and queue updates across platforms.",
    status: "Developing",
    icon: "Share2",
    deliverables: [
      "Maintaining weekly social media content calendars",
      "Scheduling posts via Buffer, Later, or Meta Business Suite",
      "Basic asset collation and caption proofreading",
      "Monitoring audience comment notifications and direct message flags",
    ],
    toolsUsed: ["Buffer", "Meta Business Suite", "Canva", "Notion"],
    enabled: true,
  },
  {
    id: "customer-comm",
    title: "Customer Communication Support",
    shortDescription:
      "Helping manage routine customer enquiries, support tickets, and polite professional communications.",
    fullDescription:
      "Friendly, professional first-line client correspondence. I assist with standard FAQ answers, directing urgent inquiries to the right team member, and tracking satisfaction follow-ups.",
    status: "Developing",
    icon: "MessageSquare",
    deliverables: [
      "Responding to standard client questions using approved templates",
      "Routing complex questions to the principal with contextual summaries",
      "Feedback collection and client satisfaction check-ins",
      "Drafting professional email follow-ups after inquiries",
    ],
    toolsUsed: ["Zendesk / Help Scout (basics)", "Gmail", "Slack", "Notion"],
    enabled: true,
  },
];

export const SKILLS_LIST: SkillItem[] = [
  {
    id: "org-time",
    name: "Organisation & Time Management",
    category: "Administration",
    description: "Prioritizing tasks systematically, planning daily workflows, and respecting client deadlines.",
    iconName: "Clock",
  },
  {
    id: "attention-detail",
    name: "Attention to Detail",
    category: "Administration",
    description: "Thorough verification of names, dates, links, and figures before finalizing any submission.",
    iconName: "CheckCircle",
  },
  {
    id: "email-mgmt",
    name: "Email Management",
    category: "Administration",
    description: "Setting up folders, labels, filters, and priority flagging to keep inboxes manageable.",
    iconName: "Mail",
  },
  {
    id: "doc-prep",
    name: "Document Preparation",
    category: "Administration",
    description: "Structuring meeting briefs, executive summaries, agendas, and standard operating procedures.",
    iconName: "FileCheck",
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    category: "Tools & Software",
    description: "Proficient in Docs, Sheets, Drive organization, Forms, Gmail, and Google Calendar.",
    iconName: "Laptop",
  },
  {
    id: "ms-office",
    name: "Microsoft Office",
    category: "Tools & Software",
    description: "Word formatting, Excel spreadsheet entries, PowerPoint layouts, and Outlook setup.",
    iconName: "Layers",
  },
  {
    id: "data-entry",
    name: "Data Entry & Integrity",
    category: "Tools & Software",
    description: "Accurate information transcription, duplicate checking, and spreadsheet structuring.",
    iconName: "Database",
  },
  {
    id: "written-comm",
    name: "Written Communication",
    category: "Communication & Research",
    description: "Clear, courteous, and grammatically accurate professional correspondence.",
    iconName: "PenTool",
  },
  {
    id: "online-research",
    name: "Online Research",
    category: "Communication & Research",
    description: "Structured desk research, competitive summaries, and fact verification from credible sources.",
    iconName: "Search",
  },
  {
    id: "social-org",
    name: "Social Media Organisation",
    category: "Communication & Research",
    description: "Maintaining visual content pipelines, caption scheduling, and calendar alignment.",
    iconName: "Calendar",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "weekly-calendar-system",
    title: "Weekly Calendar & Scheduling System",
    category: "Scheduling",
    badgeLabel: "Practice Project",
    shortDescription:
      "A structured executive calendar architecture designed with time-blocking, color-coded task priorities, and buffer zones to eliminate schedule congestion.",
    fullDescription:
      "This sample practice project demonstrates an executive calendar system developed to streamline a busy entrepreneur's typical workweek. It establishes explicit 15-minute buffer windows between consecutive meetings, groups external client consultations on specific focus days, preserves uninterrupted deep-work blocks, and incorporates time-zone coordination standards.",
    image: "/src/assets/images/sample_calendar_system_1793654670682.jpg",
    objectives: [
      "Eliminate meeting fatigue by introducing mandatory 15-minute buffer blocks",
      "Protect 10+ hours per week for strategic deep work and administration",
      "Color-code appointments by category (Strategy, Client, Operations, Rest)",
      "Standardize meeting confirmation templates and Google Meet links",
    ],
    keyFeatures: [
      "Colour-coded priority categories: Golden Sand (Strategy), Terracotta (Team Ops), Warm Beige (Client Calls), Cream (Deep Work)",
      "Structured Daily Agenda with dedicated morning triage (8:00 - 9:00 AM)",
      "Pre-meeting briefing preparation slots prior to executive presentations",
      "End-of-day correspondence and inbox wrap-up buffer (4:30 - 5:30 PM)",
    ],
    toolsUsed: ["Google Calendar", "Calendly", "Timezone Converter", "Notion"],
    previewType: "calendar",
  },
  {
    id: "admin-tracker-spreadsheet",
    title: "Administrative Tracker & Task Pipeline",
    category: "Data & Systems",
    badgeLabel: "Practice Project",
    shortDescription:
      "A clean, multi-column task and operations tracker featuring status pipelines, priority hierarchies, owner tagging, and milestone completion logs.",
    fullDescription:
      "This practice project showcases an administrative spreadsheet tracker built to help an independent consultant keep track of multiple deliverables simultaneously. It features clean data columns, standardized priority categories (High, Medium, Low), live status tracking (In Progress, Completed, Scheduled, Pending), and clear notes on task owners.",
    image: "/src/assets/images/sample_tracker_sheet_1793654683811.jpg",
    objectives: [
      "Provide a single source of truth for ongoing client tasks and deliverables",
      "Reduce oversight risk with explicit deadlines and owner accountability",
      "Enable quick visual filtering by status and urgency level",
      "Establish clean spreadsheet typography and consistent date standards",
    ],
    keyFeatures: [
      "Standardized status tags: Completed, In Progress, Scheduled, Pending, Not Started",
      "Priority triage system: High (Red), Medium (Amber), Low (Slate)",
      "Clean column headers with task sequence, deadline dates, and owner logs",
      "Filterable categories for Budget Review, Kickoff Meetings, and Contract Drafts",
    ],
    toolsUsed: ["Google Sheets", "Microsoft Excel", "Airtable"],
    previewType: "spreadsheet",
  },
  {
    id: "client-communication-template",
    title: "Professional Client Document & Email Template Kit",
    category: "Documentation",
    badgeLabel: "Practice Project",
    shortDescription:
      "A standardized communication kit featuring meeting recap memos, onboarding briefing documents, and polite email correspondence templates.",
    fullDescription:
      "This sample project displays a cohesive document and email communication kit designed for executive support. It demonstrates how routine interactions—such as post-meeting summaries, client onboarding checklists, and polite follow-up messages—can be formatted with clear headings, bullet points, and an approachable yet professional tone.",
    image: "/src/assets/images/sample_doc_template_1793654697088.jpg",
    objectives: [
      "Ensure professional, error-free communication across all client touchpoints",
      "Speed up response time by utilizing tailored, customizable template structures",
      "Maintain document formatting standards with consistent fonts, margins, and headers",
      "Provide clients with scannable executive summaries and action items",
    ],
    keyFeatures: [
      "Executive Meeting Recap Brief: Attendees, Discussion Points, Agreed Decisions, Next Steps with Assigned Owners",
      "Client Welcome & Onboarding Memo: Timeline, required assets, communication channels, and key dates",
      "Polite Follow-up & Reminder Template for pending approvals and document reviews",
      "Clean typography rules: 1.5 line height, clear section divisions, and zero clutter",
    ],
    toolsUsed: ["Google Docs", "Microsoft Word", "Canva", "Markdown"],
    previewType: "document",
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "A Thoughtful Approach to Tasks",
    description:
      "I take the time to review instructions, confirm requirements, and clarify any ambiguities before starting, ensuring work is done right the first time.",
    icon: "Compass",
  },
  {
    title: "Focus on Organisation & Accuracy",
    description:
      "Whether managing files, entering data, or scheduling appointments, I double-check details to uphold clean, consistent standards.",
    icon: "Target",
  },
  {
    title: "Clear, Professional Communication",
    description:
      "You will always receive prompt check-ins, respectful and polite correspondence, and transparent updates on how your tasks are progressing.",
    icon: "MessageCircle",
  },
  {
    title: "Willingness to Learn & Adapt",
    description:
      "Every client has unique systems. I am flexible, quick to absorb new platforms or SOPs, and receptive to constructive guidance.",
    icon: "Sparkles",
  },
  {
    title: "Respect for Confidentiality",
    description:
      "I treat all business materials, correspondence, contact lists, and personal schedules with discretion and strict privacy.",
    icon: "ShieldCheck",
  },
  {
    title: "Commitment to Continuous Improvement",
    description:
      "As an aspiring Virtual Assistant, I am constantly practicing, upskilling, and refining my administrative toolset to deliver better support.",
    icon: "TrendingUp",
  },
];
