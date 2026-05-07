export interface CaseStudy {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Project {
  title: string;
  slug:string;
  role: string;
  technologies: string[];
  summary: string;
  star: CaseStudy;
}

export interface SkillCategory {
  category: string;
  items: string[];
}



export const skillsData: SkillCategory[] = [
  {
    category: "Backend & Systemss",
    items: ["C#", ".NET Core", "WPF UI Development", "Asynchronous Programming", "LINQ", "Windows Services"]
  },
  {
    category: "Database Architecture",
    items: ["SQL Server", "T-SQL Optimization", "Relational Database Design", "Window Functions", "Linked Servers", "Stored Procedures"]
  },
  {
    category: "Retail Inventory Domain",
    items: ["Suggested Retail Price (SRP) Tracking", "Mass Price Synchronization", "Quantity Variance Analytics", "Cycle Count Reconciliation"]
  }
];

export const projects: Project[] = [
  {
    slug: "onavpos-engine", // Add this
    title: "ONAVPOS: Retail Inventory & Mass Pricing Engine",
    role: "Lead Database Architect & Backend Engineer",
    technologies: ["C#", "SQL Server", "WPF", "T-SQL", "Query Optimization"],
    summary: "Architected a real-time inventory synchronization and automated mass price mapping system handling multi-brand retail data across distributed POS nodes.",
    star: {
      situation: "The local point-of-sale (POS) systems suffered from severe pricing desynchronization and sluggish inventory reporting. High-volume data sets for multiple retail apparel brands caused massive locking issues and query timeouts during daily cycle counts.",
      task: "I needed to design a robust database architecture and backend synchronization logic to apply mass pricing updates efficiently, compute real-time financial variances, and refresh local UIs without blocking critical sales transactions.",
      action: "I implemented a targeted indexing strategy and refactored core pricing updates using window functions like ROW_NUMBER() over chronologically tracked data to accurately isolate and batch apply the latest records. In the C# application layer, I optimized data-binding mechanisms and decoupling strategies using DataTable chunks to process updates asynchronously, preventing UI thread starvation during heavy cycles.",
      result: "Database query execution times dropped by over 60%, completely eliminating deadlock timeouts during peak business hours. The live UI updates seamlessly without lag, providing the business with precise, real-time inventory variance calculations and instant pricing adjustments."
    }
  },
  {
    slug: "price-sync-tool", // Add this
    title: "Multi-Brand Price Synchronization & Mapping Tool",
    role: "Senior Systems Developer",
    technologies: ["C#", "SQL Server", "Linked Servers", "Dynamic SQL"],
    summary: "Built a robust background synchronization utility designed to map and update retail pricing from distributed remote databases for key apparel lines.",
    star: {
      situation: "Local item pricing changes across distinct vendor brands (including LEE, USPA, WRG, and JAG) required tedious manual matching and suffered from synchronization lag across separate linked servers.",
      task: "My objective was to automate the pricing pipeline, ensuring that changes at the master database level dynamically cascaded down to local retail tables while maintaining rigorous transactional integrity.",
      action: "I engineered a dynamic T-SQL execution framework combined with a C# mapping processor. This pipeline safely evaluates incoming price structures, transforms brand-specific parameters, and uses isolated SQL transactions to batch-update local tables.",
      result: "Eliminated manual pricing entry entirely, ensuring 100% price alignment across all brand items. The background synchronization handler cut database update latencies down to near-real-time speeds."
    }
  },
  {
    slug:"Test",
    title: "Automated Inventory Cycle Count Module",
    role: "Backend Engineer",
    technologies: ["C#", "SQL Server", "Data Aggregation", "Reporting Services"],
    summary: "Developed an inventory verification engine that aggregates physical count data to isolate system variance anomalies.",
    star: {
      situation: "Discrepancies between system inventory metrics and physical counts were hard to track, slowing down auditing teams who had to manually cross-reference scanned logs against transactional histories.",
      task: "I needed to create an optimized reporting pipeline that extracts system state snapshots and automatically reconciles physical scan logs to isolate quantity variances.",
      action: "I drafted complex set-based SQL queries that scan and aggregate system states concurrently against high-volume scan registers. The data is processed in a multi-threaded C# backend engine that computes precise variance percentages and streams them cleanly to a desktop user interface.",
      result: "Reconciliation operations that once took operations teams days now compute instantly. Discrepancy flags isolate item-level variance data immediately, vastly improving supply-chain auditing fidelity."
    }
  }
];