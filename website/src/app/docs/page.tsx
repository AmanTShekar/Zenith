"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const NoiseOverlay = dynamic(() => import("../components/NoiseOverlay"), { ssr: false });

/* ═══════════════════════════════════════ */
/*  SIDEBAR NAV                            */
/* ═══════════════════════════════════════ */

const sections = [
    {
        title: "Getting Started",
        items: [
            { id: "introduction", label: "Introduction" },
            { id: "installation", label: "Installation & Setup" },
            { id: "setup-wizard", label: "Setup Wizard" },
        ],
    },
    {
        title: "Core Architecture",
        items: [
            { id: "system-design", label: "System Design" },
            { id: "zero-trust", label: "Zero-Trust Security" },
            { id: "multi-tenant", label: "Multi-Tenant Isolation" },
            { id: "database", label: "Database Adapters" },
        ],
    },
    {
        title: "Content Modelling",
        items: [
            { id: "collections", label: "Collections & Schema" },
            { id: "custom-fields", label: "Custom Field Registration" },
        ],
    },
    {
        title: "Platform Features",
        items: [
            { id: "realtime", label: "Real-Time Collaboration" },
            { id: "ai-integration", label: "AI Integration" },
            { id: "webhooks", label: "Webhooks & Automation" },
            { id: "media", label: "Media Delivery" },
        ],
    },
    {
        title: "Developer Tools",
        items: [
            { id: "rest-api", label: "REST API Pipeline" },
            { id: "edge-sdk", label: "Edge SDK & Recipes" },
            { id: "plugins", label: "Plugin Engine" },
            { id: "cli", label: "CLI Reference" },
        ],
    },
    {
        title: "Operations",
        items: [
            { id: "migrations", label: "Database Migrations" },
            { id: "troubleshooting", label: "Troubleshooting & Triage" },
        ],
    },
];

/* ═══════════════════════════════════════ */
/*  DOCS CONTENT                           */
/* ═══════════════════════════════════════ */

const docsContent: Record<string, { title: string; content: React.ReactNode }> = {
    introduction: {
        title: "Introduction to Zenith CMS",
        content: (
            <div className="space-y-6">
                <p className="text-white/80 text-base leading-8">
                    <strong className="text-white">Zenith CMS</strong> is an enterprise-grade headless content management system engineered for maximum throughput, absolute type safety, and deep extensibility. Designed for modern software teams, Zenith bridges the gap between editorial flexibility and strict engineering constraints.
                </p>
                <div className="p-6 rounded-xl border border-[#00F0FF]/10 bg-[#00F0FF]/[0.02]">
                    <h3 className="text-sm font-semibold text-[#00F0FF]/80 mb-2">Platform Capabilities</h3>
                    <ul className="space-y-2 text-sm text-white/40">
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> <strong className="text-white/70">Zero-Trust Security:</strong> Granular RBAC and automatic cryptographic payload signing.</li>
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> <strong className="text-white/70">Database Agnostic Edge:</strong> Native, high-performance adapters for PostgreSQL and MongoDB.</li>
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> <strong className="text-white/70">Multiplayer CRDTs:</strong> Real-time collaborative document editing built directly into the core.</li>
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> <strong className="text-white/70">Deep AI Integration:</strong> Built-in neural bridge modules for dynamic SEO generation and editorial assistance.</li>
                    </ul>
                </div>
                <h2 className="text-xl font-bold text-white mt-8">The Monorepo Philosophy</h2>
                <p className="text-white/70 text-base leading-8">
                    Unlike traditional monolithic platforms, Zenith executes inside a highly decoupled, composable monorepo architecture leveraging <strong>Drizzle ORM</strong>, <strong>Turborepo</strong>, <strong>React/Vite</strong>, and <strong>TypeScript</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {[
                        { layer: "Core Engine", name: "@zenithcms-core", desc: "The Node.js REST kernel with Ahead-of-Time Zod schema validation." },
                        { layer: "Control Plane", name: "@zenithcms-admin", desc: "The blazing-fast React SPA compiled via Vite for editorial workflows." },
                        { layer: "Contracts", name: "@zenithcms-types", desc: "Unified type contracts ensuring E2E safety from DB to Browser." },
                    ].map(l => (
                        <div key={l.name} className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                            <div className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-widest mb-2">{l.layer}</div>
                            <div className="text-sm font-semibold text-white mb-1">{l.name}</div>
                            <div className="text-xs text-white/30">{l.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    installation: {
        title: "Installation & Setup",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Use <code className="text-[#00F0FF] font-mono bg-[#00F0FF]/10 px-1.5 py-0.5 rounded">create-zenithcms-app</code> to bootstrap a new standalone Zenith CMS project in under 60 seconds.
                </p>
                <h2 className="text-xl font-bold text-white">System Prerequisites</h2>
                <div className="overflow-hidden rounded-lg border border-white/5 mb-8">
                    <table className="w-full text-sm">
                        <thead><tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Dependency</th>
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Requirement</th>
                        </tr></thead>
                        <tbody className="text-white/40">
                            <tr className="border-b border-white/5"><td className="p-3">Node.js</td><td className="p-3">v20.11.0 or later (LTS)</td></tr>
                            <tr className="border-b border-white/5"><td className="p-3">Package Manager</td><td className="p-3">npm, pnpm (v9+ recommended), or yarn</td></tr>
                            <tr className="border-b border-white/5"><td className="p-3">Relational DB</td><td className="p-3">PostgreSQL 15+</td></tr>
                            <tr><td className="p-3">Document DB</td><td className="p-3">MongoDB 6.0+</td></tr>
                        </tbody>
                    </table>
                </div>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">CLI Scaffolding</h2>
                <div className="space-y-8">
                    {[
                        { step: "01", title: "Run the Scaffolding CLI", code: "npx create-zenithcms-app my-project" },
                        { step: "02", title: "Navigate & Install", code: "cd my-project\npnpm install" },
                        { step: "03", title: "Configure Environment", desc: "The CLI generates a .env file automatically. Verify DATABASE_URL before proceeding.", code: "PORT=3000\nDATABASE_URL=mongodb://localhost:27017/zenith\nDATABASE_TYPE=mongodb" },
                        { step: "04", title: "Boot the Cluster", code: "npm run dev", desc: "This invokes Turborepo to orchestrate parallel builds of the Backend API and the Admin UI. The CLI will automatically launch your default browser to http://localhost:3000/admin." },
                    ].map(s => (
                        <div key={s.step} className="flex gap-6">
                            <div className="shrink-0 w-10 h-10 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] flex items-center justify-center text-sm font-mono text-[#00F0FF]/60">
                                {s.step}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                                {s.desc && <p className="text-sm text-white/40 leading-relaxed mb-3">{s.desc}</p>}
                                {s.code && (
                                    <div className="rounded-lg bg-[#0a0a0a] border border-white/5 p-4">
                                        <pre className="text-sm text-[#00F0FF]/70 font-mono whitespace-pre-wrap">{s.code}</pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    "setup-wizard": {
        title: "The Setup Wizard",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    When you first launch a new Zenith CMS instance (where the target database is empty), you will be automatically redirected to the Setup Wizard.
                </p>
                <div className="p-6 rounded-lg border border-white/5 bg-white/[0.015] mb-6">
                    <h3 className="text-lg font-bold text-white mb-2">Provisioning the Super Admin</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                        This interactive React UI securely provisions the initial Super Admin account. It ensures that the first user is granted overarching permissions to define schemas, create API keys, and invite other editors.
                    </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#00F0FF]/15 bg-[#00F0FF]/[0.02]">
                    <div className="text-[#00F0FF]/40 text-xl font-bold">💡</div>
                    <p className="text-sm text-[#00F0FF]/80 leading-relaxed">
                        If you ever need to trigger the Setup Wizard again in a new environment, simply point your Zenith CMS <code className="bg-black/50 px-1 rounded">.env</code> to a fresh, empty database. The core engine will detect the missing <code className="bg-black/50 px-1 rounded">users</code> table and re-activate the initialization sequence.
                    </p>
                </div>
            </div>
        ),
    },
    "system-design": {
        title: "System Architecture",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Zenith is engineered as a multi-tenant headless CMS using a highly decoupled architecture. The database layer, API surface, and administrative UI evolve independently.
                </p>
                
                <div className="p-4 rounded-lg bg-[#0a0a0a] border border-white/5 overflow-x-auto my-8">
                    <pre className="text-xs text-[#00F0FF]/70 font-mono">
{`┌────────────────────────┐      ┌─────────────────────────┐
│  Client Application    │      │  Admin UI SPA (Vite)    │
│  (Next.js / Astro)     │      │  (React / Tailwind)     │
└───────────┬────────────┘      └────────────┬────────────┘
            │                                │
            │ REST / SDK                     │ REST / WebSockets
            ▼                                ▼
┌─────────────────────────────────────────────────────────┐
│                    Core API Engine                      │
│                                                         │
│  ┌──────────────┐   ┌──────────────┐   ┌─────────────┐  │
│  │ AOT Zod Val. │   │ Tenant Isola │   │ Event Hooks │  │
│  └──────────────┘   └──────────────┘   └─────────────┘  │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Database Adapters                    │
│      (Drizzle PostgreSQL)   OR   (Mongoose MongoDB)     │
└─────────────────────────────────────────────────────────┘`}
                    </pre>
                </div>

                <h2 className="text-xl font-bold text-white mt-8">Request Lifecycle</h2>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { title: "1. Authentication Middleware", desc: "Checks for an HttpOnly session cookie (Admin UI) or a Bearer token / API Key (Headless consumers)." },
                        { title: "2. Tenant Scoping", desc: "Extracts the X-Zenith-Site-Id header. All subsequent operations enforce this ID as a filter." },
                        { title: "3. Zod Schema Validation", desc: "Schemas are dynamically compiled from your cms.config.ts. Payloads are strictly validated before hitting the DB." },
                        { title: "4. Lifecycle Hooks Execution", desc: "beforeChange, beforeValidate, and afterChange hooks execute in a highly optimized sandbox." },
                    ].map((item, i) => (
                        <div key={item.title} className="flex gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.015]">
                            <div className="text-[#00F0FF]/40 font-mono text-sm shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</div>
                            <div>
                                <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                                <div className="text-sm text-white/40 leading-relaxed">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    "zero-trust": {
        title: "Zero-Trust Security",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Zenith employs a zero-trust model out of the box. No payload is trusted by default, and no database query executes without cryptographic verification of the tenant boundary.
                </p>
                <div className="p-6 rounded-xl border border-red-500/10 bg-red-500/[0.02]">
                    <h3 className="text-sm font-semibold text-red-400 mb-2">Ahead-of-Time Validation</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                        Rather than relying on the database driver to catch malformed payloads, Zenith compiles your schemas into highly optimized Zod validators at boot time. Malicious payloads are rejected at the edge—before controller logic or database connections are ever engaged.
                    </p>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                    Additionally, Webhooks generated by Zenith are signed cryptographically using <strong>HMAC-SHA256</strong>. All external ingestion points must verify this signature using a constant-time comparison to mitigate timing attacks.
                </p>
            </div>
        ),
    },
    "multi-tenant": {
        title: "Multi-Tenant Isolation",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Multi-tenancy in Zenith means one deployment can serve multiple completely isolated "Sites" (tenants) from the same database cluster.
                </p>
                <h2 className="text-xl font-bold text-white mt-8">The Mechanics of Isolation</h2>
                <div className="space-y-4">
                    {[
                        { title: "The Header", desc: "Every API request that mutates or retrieves data must provide the X-Zenith-Site-Id header." },
                        { title: "The Enforcement", desc: "In the Database Adapter layer, every query is transparently intercepted. The adapter automatically injects { siteId: request.siteId } into the query constraints." },
                        { title: "The Result", desc: "It is cryptographically and logically impossible for Site A to query or mutate Site B's data, as the adapter enforces the filter at the lowest level." },
                    ].map((item) => (
                        <div key={item.title} className="p-4 rounded-lg border border-white/5 bg-white/[0.015]">
                            <div className="text-sm font-semibold text-[#00F0FF] mb-1">{item.title}</div>
                            <div className="text-sm text-white/50 leading-relaxed">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    database: {
        title: "Database Adapters",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Zenith is unique in its support for both document (MongoDB) and relational (PostgreSQL) databases without requiring a rewrite of your data access logic or schemas.
                </p>
                <h2 className="text-xl font-bold text-white mt-6">The Abstract Bridge</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                    The Core API never imports <code className="text-[#00F0FF]">mongoose</code> or <code className="text-[#00F0FF]">drizzle</code> directly. Instead, route handlers call methods on an abstract <code className="text-[#00F0FF]">DatabaseAdapter</code> interface.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg border border-white/5 bg-[#0a0a0a]">
                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <span className="text-[#00F0FF]">●</span> PostgreSQL (Drizzle)
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">
                            Maps complex field types (like blocks and arrays) into native JSONB columns, while maintaining strict foreign keys for relational fields via automated junction tables.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg border border-white/5 bg-[#0a0a0a]">
                        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <span className="text-emerald-400">●</span> MongoDB (Mongoose)
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">
                            Utilizes rich BSON schema validation and highly nested sub-documents to store complex content structures without joining constraints.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    collections: {
        title: "Collections & Schema",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Zenith CMS manages content through strictly typed schemas defined in your <code className="text-[#00F0FF]">cms.config.ts</code>. These definitions are translated simultaneously into database structures (Drizzle/Mongoose) and validation schemas (Zod).
                </p>
                <h2 className="text-xl font-bold text-white mt-6">Defining a Collection</h2>
                <div className="rounded-lg bg-[#0a0a0a] border border-white/5 p-4 mb-6">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
{`import { collection, field } from '@zenith-open/zenithcms-core';

export const Posts = collection({
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    field.text('title', { required: true }),
    field.slug('slug', { target: 'title' }),
    field.richText('content'),
    field.relation('author', { relationTo: 'users' })
  ]
});`}
                    </pre>
                </div>
                <h3 className="text-lg font-semibold text-white mt-8 mb-4">Advanced Field Topologies</h3>
                <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <h4 className="text-sm font-semibold text-white mb-2">Relations</h4>
                        <p className="text-sm text-white/50 leading-relaxed">The <code className="text-[#00F0FF]">relation</code> field allows you to link documents across collections. In PostgreSQL, this dynamically generates foreign key constraints or junction tables for <code className="text-[#00F0FF]">hasMany</code> relationships.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <h4 className="text-sm font-semibold text-white mb-2">Blocks & Arrays</h4>
                        <p className="text-sm text-white/50 leading-relaxed">The <code className="text-[#00F0FF]">array</code> field allows repeatable sub-schemas. The <code className="text-[#00F0FF]">blocks</code> field enables polymorphic layout generation (e.g., a "Page Builder" where you can stack a "Hero" block, then a "Gallery" block).</p>
                    </div>
                </div>
            </div>
        ),
    },
    "custom-fields": {
        title: "Custom Field Registration",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    While Zenith comes with a comprehensive suite of built-in field types, you may need a highly specialized input component—for example, a Color Picker, Map coordinate selector, or a Stripe product ID lookup.
                </p>
                <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-4">1. The UI Field Type</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                        Use the generic <code className="text-[#00F0FF]">ui</code> field type to tell the backend to store data as JSON/String, but tell the frontend to look for a custom registered React component.
                    </p>
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
{`fields: [
  {
    name: 'stripeProductId',
    type: 'ui',
    admin: { description: 'Select a product directly from Stripe' }
  }
]`}
                    </pre>
                </div>
                <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/5 mt-4">
                    <h3 className="text-lg font-bold text-white mb-4">2. The React Component</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                        Your custom component will receive standard props from Zenith's form engine, including <code className="text-[#00F0FF]">value</code> and <code className="text-[#00F0FF]">onChange</code>.
                    </p>
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
{`export const StripeProductField: React.FC<FieldProps> = ({ value, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="prod_123">Premium Plan</option>
    </select>
  )
}`}
                    </pre>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg border border-[#00F0FF]/15 bg-[#00F0FF]/[0.02]">
                    <div className="text-[#00F0FF]/40 text-xl font-bold">💡</div>
                    <p className="text-sm text-[#00F0FF]/80 leading-relaxed">
                        To register the component, map it in the Admin UI's <code className="bg-black/50 px-1 rounded">FieldRenderer.tsx</code>. Dynamic remote module federation for Admin UI plugins is coming in Zenith v1.2.
                    </p>
                </div>
            </div>
        ),
    },
    realtime: {
        title: "Real-Time Collaboration",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Concurrent modification of content introduces race conditions and data loss risks. Zenith CMS mitigates these risks via active document locking and real-time presence synchronization via WebSockets.
                </p>
                
                <h2 className="text-xl font-bold text-white mt-8 mb-4">Presence Synchronization Architecture</h2>
                <div className="p-4 rounded-lg bg-[#0a0a0a] border border-white/5 overflow-x-auto mb-8">
                    <pre className="text-xs text-[#00F0FF]/70 font-mono">
{`Client A (Web UI) ─┐                       ┌──> (Broadcast) ──> Client A
                   │                       │
               [WebSocket]             [Event Bus]
                   │                       │
                   ▼                       │
            ┌──────────────┐       ┌──────────────┐
            │ Core Server  ├──────>│ Presence     │
            │ Authenticator│       │ Ledger       │
            └──────────────┘       └──────────────┘`}
                    </pre>
                </div>
                
                <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="text-lg font-semibold text-white mb-2">Heartbeat Lifecycle</h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            The frontend transmits a lightweight telemetry payload every 10 seconds indicating the user's active document and \`siteId\`. The presence ledger enforces a strict 60-second Time-To-Live (TTL) to automatically reap disconnected sessions.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="text-lg font-semibold text-white mb-2">Distributed Document Locking</h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            When Client A edits a document, an exclusive lock is acquired. If Client B navigates to the same document, the system broadcasts a lock conflict event, instantly degrading Client B's UI into a read-only state until the lock is released.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    "ai-integration": {
        title: "AI Integration (Neural Bridge)",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    The Zenith CMS Admin UI includes a built-in AI Content Hub that allows content editors to generate, refine, and analyze content directly within the dashboard.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 rounded-lg border border-white/5 bg-[#0a0a0a]">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <span className="text-[#00F0FF]">●</span> Content Generation
                        </h4>
                        <p className="text-sm text-white/40 leading-relaxed">Accessible via the <code>Ctrl+Space</code> shortcut. Generated text streams back via WebSockets and can be inserted into any Rich Text field.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-[#0a0a0a]">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <span className="text-[#00F0FF]">●</span> SEO Analysis
                        </h4>
                        <p className="text-sm text-white/40 leading-relaxed">Evaluates draft content against metrics like readability (Flesch-Kincaid), keyword density, and meta tag optimization.</p>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">Provider Configuration</h2>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                    Zenith's AI layer is model-agnostic. Enable providers by adding keys to your <code className="text-[#00F0FF]">.env</code>:
                </p>
                <div className="overflow-hidden rounded-lg border border-white/5 mb-8">
                    <table className="w-full text-sm">
                        <thead><tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Environment Variable</th>
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Provider / Models</th>
                        </tr></thead>
                        <tbody className="text-white/40">
                            <tr className="border-b border-white/5"><td className="p-3"><code>OPENAI_API_KEY</code></td><td className="p-3">OpenAI (GPT-4o, GPT-4o-mini)</td></tr>
                            <tr className="border-b border-white/5"><td className="p-3"><code>ANTHROPIC_API_KEY</code></td><td className="p-3">Anthropic (Claude 3.5 Sonnet)</td></tr>
                            <tr className="border-b border-white/5"><td className="p-3"><code>XAI_API_KEY</code></td><td className="p-3">xAI (Grok-2)</td></tr>
                            <tr><td className="p-3"><code>OPENROUTER_API_KEY</code></td><td className="p-3">OpenRouter (Llama 3, Mixtral)</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
    },
    webhooks: {
        title: "Webhooks & Automation",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Zenith acts as the central nervous system for your digital ecosystem. Declarative HTTP callbacks can instantly trigger downstream actions upon content state mutations.
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Vercel / Netlify Deployments", desc: "Saving a document (like publishing a new blog post) can instantly dispatch a POST request to rebuild your static frontend." },
                        { title: "Internal CI/CD Pipelines", desc: "Trigger GitHub Actions or GitLab pipelines when major collections undergo schema changes." },
                        { title: "Slack / Discord Notifications", desc: "Notify editorial channels when drafts are transitioned to the 'Pending Review' state." },
                    ].map((item, i) => (
                        <div key={item.title} className="flex gap-4 p-4 rounded-lg border border-[#00F0FF]/10 bg-[#00F0FF]/[0.015]">
                            <div>
                                <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                                <div className="text-sm text-[#00F0FF]/60 leading-relaxed">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    media: {
        title: "Media Delivery",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    The Media Library allows you to upload and categorize images, PDFs, and videos. Zenith automatically processes variants and strips potentially harmful metadata.
                </p>
                <div className="p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.02]">
                    <h3 className="text-sm font-semibold text-yellow-500/80 mb-2">Production Recommendations</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                        Zenith utilizes an on-the-fly image processing engine via <code className="bg-white/10 px-1 rounded">sharp</code> for resizing. To prevent high CPU usage on your Zenith core cluster, it is <strong>strictly required</strong> to place Zenith behind a CDN (like Cloudflare or Fastly) for caching public media delivery at the edge.
                    </p>
                </div>
            </div>
        ),
    },
    "rest-api": {
        title: "REST API Specification",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    The Zenith Core API is strictly headless and features comprehensive Swagger / OpenAPI documentation generated from your schemas dynamically.
                </p>
                <div className="p-4 rounded-lg bg-[#0a0a0a] border border-white/5 mb-8">
                    <pre className="text-sm text-[#00F0FF]/70 font-mono whitespace-pre-wrap">
                        {`╔════════════════════════════════════════════════╗
║       Zenith CMS — API Endpoints               ║
╠════════════════════════════════════════════════╣
║  REST API   →  /api/v1/:collection             ║
║  GraphQL    →  /graphql                        ║
║  Swagger    →  /api-docs                       ║
╚════════════════════════════════════════════════╝`}
                    </pre>
                </div>
                
                <h2 className="text-xl font-bold text-white mt-8 mb-4">Filtering Syntax</h2>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                    Filters are passed via the <code className="text-[#00F0FF]">where</code> query parameter using MongoDB-style query operators, which are automatically translated for PostgreSQL databases by the Drizzle adapter.
                </p>
                <div className="p-4 rounded-lg bg-[#0a0a0a] border border-white/5 mb-8">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
{`// Example: ?where={"status":{"$equals":"published"},"views":{"$gte":100}}
{
  "status": { "$equals": "published" },
  "views": { "$gte": 100 }
}`}
                    </pre>
                </div>
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">Supported Operators</h3>
                <ul className="list-disc list-inside text-sm text-white/60 space-y-2">
                    <li><code className="text-[#00F0FF]">$equals</code>, <code className="text-[#00F0FF]">$notEquals</code></li>
                    <li><code className="text-[#00F0FF]">$in</code>, <code className="text-[#00F0FF]">$notIn</code></li>
                    <li><code className="text-[#00F0FF]">$gt</code>, <code className="text-[#00F0FF]">$gte</code>, <code className="text-[#00F0FF]">$lt</code>, <code className="text-[#00F0FF]">$lte</code></li>
                    <li><code className="text-[#00F0FF]">$contains</code>, <code className="text-[#00F0FF]">$startsWith</code></li>
                </ul>
            </div>
        ),
    },
    "edge-sdk": {
        title: "Edge SDK & Integration Recipes",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    When consuming the Zenith Core API from an edge runtime (e.g., Next.js Edge API routes, Cloudflare Workers), utilize the official SDK to handle tenant scoping and API token injection automatically.
                </p>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">Data Fetching</h2>
                <div className="rounded-lg bg-[#0a0a0a] border border-white/5 p-4 mb-8">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap overflow-x-auto">
{`import { createZenithClient } from '@zenith-open/zenithcms-sdk'

const cms = createZenithClient({
  baseUrl: process.env.ZENITH_CORE_API_URL,
  apiKey: process.env.ZENITH_WORKSPACE_TOKEN,
  defaultSiteId: 'site_sandbox_901a',
})

const page = await cms.collections('pages').find({
  filter: { slug: 'home', status: 'published' },
  limit: 1,
})`}
                    </pre>
                </div>

                <h2 className="text-xl font-bold text-white mt-8 mb-4">Secure Webhook Verification</h2>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                    Outbound webhooks generated by Zenith CMS are signed cryptographically via HMAC-SHA256. Use constant-time comparison to mitigate timing attacks on your frontend receivers.
                </p>
                <div className="rounded-lg bg-[#0a0a0a] border border-white/5 p-4">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap overflow-x-auto">
{`const signature = req.headers['x-zenith-signature']
const computedHash = crypto
  .createHmac('sha256', process.env.ZENITH_WEBHOOK_SECRET)
  .update(JSON.stringify(req.body))
  .digest('hex')

const isValid = crypto.timingSafeEqual(
  Buffer.from(signature, 'hex'),
  Buffer.from(computedHash, 'hex')
)`}
                    </pre>
                </div>
            </div>
        ),
    },
    plugins: {
        title: "Plugin Engine",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Need to extend the core? Zenith features a robust Plugin Engine that seamlessly injects new functionality into the platform lifecycle via the <code className="text-[#00F0FF]">ZenithPlugin</code> interface.
                </p>
                <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/5 mb-8">
                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap overflow-x-auto">
{`import type { ZenithPlugin, CMSConfig, PluginContext } from '@zenith-open/zenithcms-types'

export const myCustomPlugin: ZenithPlugin = {
  id: 'acme-custom-plugin',
  
  // 1. Schema Mutation Phase
  apply: (config: CMSConfig) => { ... },

  // 2. Lifecycle Phase: Initialization
  onInit: async (ctx: PluginContext) => { ... },
}`}
                    </pre>
                </div>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">Official Plugins Directory</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <h4 className="text-sm font-semibold text-white mb-1">Search & Indexing</h4>
                        <p className="text-xs text-white/40 leading-relaxed"><code>@zenith-open/zenithcms-plugin-algolia</code>: Real-time sync to Algolia indices.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <h4 className="text-sm font-semibold text-white mb-1">Auth & SSO</h4>
                        <p className="text-xs text-white/40 leading-relaxed">OAuth for GitHub, Google, and Enterprise SAML 2.0 provisioning.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <h4 className="text-sm font-semibold text-white mb-1">Storage Adapters</h4>
                        <p className="text-xs text-white/40 leading-relaxed">S3, Cloudinary, Azure Blob, and Google Cloud Storage media interceptors.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <h4 className="text-sm font-semibold text-white mb-1">Commerce</h4>
                        <p className="text-xs text-white/40 leading-relaxed">Stripe payments integration for subscriptions and checkouts.</p>
                    </div>
                </div>
            </div>
        ),
    },
    cli: {
        title: "CLI Reference",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    After installing <code className="bg-white/10 px-1 rounded">@zenith-open/zenithcms-cli</code>, the <code className="bg-white/10 px-1 rounded">zenith</code> command provides powerful utilities for interacting with your CMS infrastructure.
                </p>
                <div className="space-y-3">
                    {[
                        { cmd: "zenith generate-types", desc: "Generate TypeScript interfaces from your cms.config.ts" },
                        { cmd: "zenith export-schema", desc: "Export the full collection schema as JSON" },
                        { cmd: "zenith migration:generate", desc: "Generate a new database migration automatically" },
                        { cmd: "zenith create-plugin", desc: "Scaffold a new Zenith plugin package" },
                    ].map(item => (
                        <div key={item.cmd} className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-[#0a0a0a]">
                            <code className="text-sm text-[#00F0FF] font-mono">{item.cmd}</code>
                            <span className="text-xs text-white/30">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    migrations: {
        title: "Database Migrations",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    Because Zenith CMS supports both MongoDB and PostgreSQL, schema migrations are orchestrated dynamically. Data transformations and structural deletions require manual migration files.
                </p>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">The Expand & Contract Pattern</h2>
                <p className="text-white/70 text-base leading-relaxed">
                    Applying a breaking schema change directly causes application downtime. Avoid this by using the Expand & Contract pattern across multiple deployments.
                </p>
                <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="text-sm font-bold text-[#00F0FF] mb-2">Step 1: Expand</h3>
                        <p className="text-sm text-white/50 leading-relaxed">Add the new field. Update codebase to write to BOTH fields. Read from new field, fallback to old. Deploy Version A.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="text-sm font-bold text-[#00F0FF] mb-2">Step 2: Migrate</h3>
                        <p className="text-sm text-white/50 leading-relaxed">Run a migration script to backfill data from the old field to the new field for all existing records.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="text-sm font-bold text-[#00F0FF] mb-2">Step 3: Contract</h3>
                        <p className="text-sm text-white/50 leading-relaxed">Remove codebase references to the old field. Deploy Version B. Run final migration to drop the column.</p>
                    </div>
                </div>
            </div>
        ),
    },
    troubleshooting: {
        title: "Troubleshooting & Triage",
        content: (
            <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed">
                    A deterministic process for isolating environmental variables, resolving database connectivity faults, and safely releasing orphaned collaboration locks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="p-6 rounded-lg border border-red-500/10 bg-red-500/[0.02]">
                        <h3 className="text-white font-semibold mb-2">Database Connectivity</h3>
                        <p className="text-sm text-white/50 leading-relaxed mb-4">If the server crashes with `ECONNREFUSED`, the adapter failed to connect.</p>
                        <code className="block bg-black/40 text-xs text-red-300 p-2 rounded">curl -I http://localhost:27017</code>
                    </div>
                    <div className="p-6 rounded-lg border border-yellow-500/10 bg-yellow-500/[0.02]">
                        <h3 className="text-white font-semibold mb-2">Stale Document Locks</h3>
                        <p className="text-sm text-white/50 leading-relaxed mb-4">If a client disconnects unexpectedly, execute the cache purge script to destroy the lock:</p>
                        <code className="block bg-black/40 text-xs text-yellow-300 p-2 rounded">pnpm run db:clear-locks</code>
                    </div>
                </div>
            </div>
        ),
    },
};
// Fallback for sections that don't have full content yet
const defaultContent = (title: string) => ({
    title,
    content: (
        <div className="space-y-6">
            <p className="text-white/50 text-lg leading-relaxed">
                Documentation for <span className="text-white/70 font-medium">{title}</span> is coming soon. This section will be available when Zenith launches.
            </p>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <p className="text-sm text-white/30">Want to help write this? <Link href="/#contribute" className="text-[#00F0FF]/60 hover:text-[#00F0FF] transition-colors">Contribute to the docs →</Link></p>
            </div>
        </div>
    ),
});

/* ═══════════════════════════════════════ */
/*  DOCS PAGE                              */
/* ═══════════════════════════════════════ */

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("introduction");
    const currentDoc = docsContent[activeSection] || defaultContent(
        sections.flatMap(s => s.items).find(i => i.id === activeSection)?.label || activeSection
    );

    return (
        <main className="bg-[#050505] text-white min-h-screen">
            <NoiseOverlay />
            <Navbar />

            <div className="pt-24 flex min-h-screen">
                {/* Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 border-r border-white/10 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto px-6 py-8 bg-[#0a0a0a]/50 backdrop-blur-md">
                    <nav className="space-y-8">
                        {sections.map(section => (
                            <div key={section.title}>
                                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-3">{section.title}</div>
                                <div className="space-y-1">
                                    {section.items.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`block w-full text-left px-3 py-1.5 rounded-md text-sm transition-all ${activeSection === item.id
                                                ? "text-[#00F0FF] bg-[#00F0FF]/[0.06] border-l-2 border-[#00F0FF]/40"
                                                : "text-white/35 hover:text-white/60 hover:bg-white/[0.03]"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <div className="flex-1 max-w-4xl mx-auto px-8 md:px-16 py-12 pb-32 prose-container">
                    {/* Mobile nav */}
                    <div className="lg:hidden mb-8">
                        <select
                            value={activeSection}
                            onChange={e => setActiveSection(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm outline-none"
                        >
                            {sections.map(section =>
                                section.items.map(item => (
                                    <option key={item.id} value={item.id}>{section.title} → {item.label}</option>
                                ))
                            )}
                        </select>
                    </div>

                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-white/40 font-mono mb-6">
                            <span className="hover:text-white transition-colors cursor-pointer">Zenith Docs</span>
                            <ChevronRight size={14} className="opacity-50" />
                            <span className="hover:text-white transition-colors cursor-pointer">{sections.find(s => s.items.some(i => i.id === activeSection))?.title || 'Docs'}</span>
                            <ChevronRight size={14} className="opacity-50" />
                            <span className="text-[#00F0FF]">{currentDoc.title}</span>
                        </div>
                        <h1 className="text-[clamp(32px,4vw,44px)] font-bold tracking-tight text-white mb-10 pb-6 border-b border-white/10">
                            {currentDoc.title}
                        </h1>

                        {currentDoc.content}
                    </motion.div>

                    {/* Navigation */}
                    <div className="mt-16 pt-8 border-t border-white/5 flex justify-between">
                        {(() => {
                            const allItems = sections.flatMap(s => s.items);
                            const currentIndex = allItems.findIndex(i => i.id === activeSection);
                            const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
                            const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;
                            return (
                                <>
                                    {prev ? (
                                        <button onClick={() => setActiveSection(prev.id)} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                                            ← {prev.label}
                                        </button>
                                    ) : <div />}
                                    {next ? (
                                        <button onClick={() => setActiveSection(next.id)} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                                            {next.label} →
                                        </button>
                                    ) : <div />}
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </main>
    );
}
