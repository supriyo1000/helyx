// app\documentation\pgtopg\page.tsx
"use client"

import { useState } from "react"
import { Database, Settings, Play, Monitor, CheckCircle} from "lucide-react"
import DownloadButton from "@/components/ui/DownloadButton"
import NavigationLatest from "@/components/features/navigationlatest"

export default function PostgreSQLReplicationDocs() {
    
    const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

    const copyToClipboard = async (text: string, commandId: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedCommand(commandId)
            setTimeout(() => setCopiedCommand(null), 2000)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    const commandsData = [
        {
            id: "create-pub",
            action: "Create publication",
            command: "serverconfig -createpub -s publication.config -tables tablelist.config",
        },
        {
            id: "create-sub",
            action: "Create subscription",
            command: "serverconfig -createsub -s subscription.config -pub publication.config",
        },
        {
            id: "add-tables",
            action: "Add tables to publication",
            command: "serverconfig -addtabletopub -s publication.config -tables tablelist.config",
        },
        {
            id: "snapshot",
            action: "Trigger ad-hoc snapshot",
            command: "serverconfig -adhocsnapshot -s publication.config -tables table1,table2",
        },
        {
            id: "status-pub",
            action: "Monitor publication status",
            command: "serverconfig -status -pub -s publication.config",
        },
        {
            id: "status-sub",
            action: "Monitor subscription status",
            command: "serverconfig -status -sub -s subscription.config",
        },
        {
            id: "remove-pub",
            action: "Remove publication",
            command: "serverconfig -remove -pub -s publication.config",
        },
        {
            id: "remove-sub",
            action: "Remove subscription",
            command: "serverconfig -remove -sub -s subscription.config",
        },
        {
            id: "remove-table",
            action: "Remove table from replication",
            command: "serverconfig -removetablefromrepl -s publication.config -tables table1,table2",
        },
        {
            id: "encrypt",
            action: "Encrypt password",
            command: "serverconfig -encryptPassword -s publication.config",
        },
        {
            id: "list-connectors",
            action: "List connectors",
            command: "serverconfig -listconnectors -s publication.config",
        },
        {
            id: "list-tasks",
            action: "List tasks",
            command: "serverconfig -listtask -s publication.config",
        },
        {
            id: "lag-stats",
            action: "Lag statistics",
            command: "serverconfig -lagstat -s subscription.config",
        },
        {
            id: "table-list",
            action: "List replicated tables",
            command: "serverconfig -tablelist -s publication.config",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 overflow-x-hidden">
            <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-white border-b border-gray-200 px-6 py-2.5 sm:px-3.5">
                <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
                    <a
                        className="text-sm flex items-center sm:text-[0.93rem] text-gray-900 hover:opacity-80 transition-opacity"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="mr-1" role="img" aria-label="rocket">
                            🚀
                        </span>
                        <span className="font-medium">One Engine. Many Databases. Real-Time-Replication.</span>
                    </a>

                </div>
            </div>
            {/* <Navigation/> */}
            <NavigationLatest />
            <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Database className="h-8 w-8 text-blue-600" />
                        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">PostgreSQL Replication Setup</h1>
                    </div>
                    <p className="text-md lg:text-lg text-gray-600 mb-6">
                        Complete guide for setting up real-time logical replication between PostgreSQL/EDB instances
                    </p>


                    {/* download button */}
                    <DownloadButton />

                </div>

                {/* Documentation Content */}
                <div id="documentation-content" className="space-y-8">
                    {/* Introduction */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Helyx is a lightweight, high-performance replication solution designed for real-time
                            heterogeneous database replication. It provides a simple CLI-driven experience and
                            abstracts the complexity of setting up connectors, schema registry, and replication
                            pipelines.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key highlights of Helyx:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li><span className="font-semibold">Heterogeneous Replication:</span> Supports replication across multiple database systems (e.g., PostgreSQL ↔ PostgreSQL, Oracle ↔ Oracle, Oracle → PostgreSQL, Oracle → MySQL, Oracle → MongoDB, Oracle → Snowflake).</li>
                            <li><span className="font-semibold">High Throughput:</span> Capable of handling hundreds of thousands of transactions per second across distributed data centers.</li>
                            <li><span className="font-semibold">Schema Evolution Handling:</span> Automatically adapts to schema changes like column additions and keeps source and target databases in sync.</li>
                            <li><span className="font-semibold">Zero-Downtime Replication:</span> Supports ad-hoc snapshots and live streaming without interrupting production workloads.</li>
                            <li><span className="font-semibold">Monitoring &amp; Control:</span> Built-in CLI commands allow users to check replication lag, list connectors, view tasks, and monitor end-to-end replication health.</li>
                            <li><span className="font-semibold">Deployment Friendly:</span> Delivered as self-contained executables and RPM packages, making installation and upgrades straightforward.</li>
                            <li><span className="font-semibold">Version-Aware Replication:</span> Helyx supports replication between different versions of the same technology stack (e.g., PostgreSQL 11 → PostgreSQL 15 or EDB 12 → EDB 14 or Oracle11g → Oracle19c). This ensures smooth migrations and upgrades without downtime.</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            With Helyx, enterprises can achieve enterprise-grade replication with lower operational overhead, faster setup, and proven reliability compared to traditional tools.
                        </p>
                    </div>


                    {/* Helyx Installation Guide */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Helyx Installation Guide</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Overview</h3>
                        <p className="text-gray-700 mb-4">
                            Helyx is distributed as an RPM package to simplify installation and management. By default, Helyx is installed in the directory <code className="bg-gray-100 px-1 rounded">/var/lib/helyx</code>.
                        </p>
                        <p className="text-gray-700 mb-6">
                            This section describes the steps to install Helyx from a standard YUM/DNF repository as well as from a local repository if you download the RPM manually.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Prerequisites</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                            <li>Operating System: Linux (RHEL, CentOS, Rocky Linux, Oracle Linux, Fedora, etc.).</li>
                            <li>Privileges: Root or sudo access.</li>
                            <li>Package Manager: yum or dnf depending on your OS version.</li>
                            <li>Network Access (for online installation): Access to the configured YUM repository</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Installing Helyx from a Local Repository</h3>
                        <div className="space-y-3 text-gray-700">
                            <div>
                                <p className="mb-2">Create Local Repository Directory:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`mkdir -p /opt/localrepo/helyx

cp helyx-1.1.0.rpm /opt/localrepo/helyx/`}</pre>
                                
                            </div>
                            <div>
                                <p className="mb-2">Create Repository Metadata:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`cd /opt/localrepo/helyx

createrepo .`}</pre>
                            </div>
                            <div>
                                <p className="mb-2">Add Local Repository Entry (create <code className="bg-gray-100 px-1 rounded">/etc/yum.repos.d/helyx-local.repo</code>):</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`[helyx-local]
name=Helyx Local Repository
baseurl=file:///opt/localrepo/helyx
enabled=1
gpgcheck=0`}</pre>
                            </div>
                            <div>
                                <p className="mb-2">Install from Local Repository:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`sudo yum install helyx -y`}</pre>
                            </div>
                        </div>

                        <p className="text-gray-700 mt-4">
                            Post installation verifies and ensures binaries are installed under <code className="bg-gray-100 px-1 rounded">/var/lib/helyx</code> location.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">Target:</span> Set up real-time replication between PostgreSQL/EDB source and destination with different versions as well as same version.
                        </p>
                    </div>


                    {/* Prerequisites */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Settings className="h-5 w-5 text-blue-600" />
                            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Prerequisites</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    Java 11 or above
                                </span>
                                <br />
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    Replication Binaries
                                </span>
                                <br />
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    PostgreSQL or EDB installed at source and destination
                                </span>
                            </div>
                            <div className="space-y-2">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    JDBC connectors come pre-build with Binaries
                                </span>
                                <br />
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    Config tools: tabletorepl, serverconfig and configservice
                                </span>
                                <br />
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    wal_level = logical for both Source and Destination postgresql/EDB Databases
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Directory Structure */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Directory Structure</h2>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-900 font-mono leading-6 overflow-x-auto">{`/var/lib/helyx/replconfig
├── publication.config
├── subscription.config
├── tablelist.config
├── tabletorepl
├── serverconfig
└── configservice`}</pre>


                    </div>


                    {/* Step 1: Setup Replication & Related Services */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Play className="h-5 w-5 text-blue-600" />
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Step 1: Setup Replication & Related Services</h2>
                        </div>

                        <p className="text-gray-700 mb-4">Ensure these services are configured and started:</p>

                        <div className="space-y-6 text-gray-800">
                            <div>
                                <h4 className="font-semibold mb-2">1. Sync-manager service:</h4>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`./configservice -start sync-manager`}</pre>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">2. Broker Service:</h4>
                                <p className="text-gray-700 mb-2">Edit <code className="bg-gray-100 px-1 rounded">/var/lib/helyx/</code> <span className="whitespace-nowrap">server.properties</span> and set:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`listeners = PLAINTEXT://your.host.name:9092`}</pre>

                                <p className="text-gray-700 my-2">your.host.name will be the IP address of the server where Helyx is running.</p>
                                <p className="text-gray-700 mb-2">Now start broker service:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`./configservice -start broker`}</pre>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">3. Registry Service:</h4>
                                <p className="text-gray-700 mb-2">Edit <code className="bg-lime-100 px-1 rounded">/var/lib/helyx/plugins/confluent-7.5.0/etc/schema-registry/schema-registry.properties</code> and ensure:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`kafkastore.bootstrap.servers=PLAINTEXT://<your.host.name>:9092

listeners=http://0.0.0.0:8081`}</pre>
                                <p className="text-gray-700 my-2">your.host.name will be the IP address of the server where Helyx is running.</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`./configservice -start schemaregistry`}</pre>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">4. Connect Service:</h4>
                                <p className="text-gray-700 mb-2">Edit <code className="bg-gray-100 px-1 rounded">/var/lib/helyx/config/connect-distributed.properties</code> and set:</p>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`bootstrap.servers=<your.server.ip>:9092

key.converter.schema.registry.url=http://<your.server.ip>:8081

value.converter.schema.registry.url=http://<your.server.ip>:8081`}</pre>
                                
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`./connectservice -start connect`}</pre>
                            </div>
                        </div>
                    </div>


                    {/* Step 2: Configure Source Database (Publication) */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Step 2: Configure Source Database</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Creating Helyx User in Source Database</h3>
                        <p className="text-gray-700 mb-4">In order for Helyx to perform replication, a dedicated database user with appropriate privileges must be created. This section describes the SQL commands required to create the helyx role, schema, and associated privileges on the source database.</p>

                        <div className="space-y-3">
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`CREATE ROLE helyx WITH LOGIN REPLICATION PASSWORD 'password';`}</pre>
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`CREATE SCHEMA IF NOT EXISTS helyx;`}</pre>
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`GRANT CONNECT ON DATABASE edb TO helyx;
GRANT CREATE ON DATABASE edb TO helyx;`}</pre>
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA helyx TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA helyx
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO helyx;`}</pre>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Change publication.config file</h3>
                        <p className="text-gray-700 mb-2">Edit <code className="bg-gray-100 px-1 rounded">/var/lib/helyx/replconfig/publication.config</code> with the following keys:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto font-mono text-gray-900">{`"name": "",                       // Unique identifier
"tasks.max": "1",                // Parallelism level
"database.type": "edb",          // edb or postgresql
"database.hostname": "",         // Source DB IP
"database.port": "5444",         // Source DB Port
"database.password": "",         // Source DB “helyx” user password
"database.dbname": "edb",        // Database name
"bootstrap.ip": "",              // Broker Server IP
"include.schema.list": "schema1,schema2,schema3",
"schema.history.internal.kafka.bootstrap.servers": "<serverIP>:9092",
"publication.name": "",          // Logical replication publication name
"snapshot.mode": "initial",
"database.history.kafka.bootstrap.servers": "<serverIP>:9092",
"database.history.kafka.topic": "dbhistory.<Topicname>",
"topic.prefix": "",              // Prefix for Replication topics
"max.batch.size": "2048",
"max.queue.size": 50000,
"poll.interval.ms": "1000",
"producer.batch.size": "32768",
"producer.max.request.size": "10485760"`}</pre>

                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">✅ Grant Source Permissions Automatically</h3>
                        <p className="text-gray-700 mb-2">Enter comma-separated table list at <code className="bg-gray-100 px-1 rounded">/var/lib/helyx/replconfig/tablelist.config</code>. These are the tables you want to replicate.</p>
                        <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`Schema1.Table1,
Schema2.Table2,
Schema2.Table3`}</pre>
                        <p className="text-gray-700 mt-2 mb-2">Then run:</p>
                        <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`./tabletorepl.jar -s <path_to_publication.config> -tables <path_to_tablelist.config>`}</pre>
                        <p className="text-gray-700">For command help: <code className="bg-gray-100 px-1 rounded">./tabletorepl.jar -help</code></p>
                    </div>


                    {/* Step 3: Configure Destination Database */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Step 3: Configure Destination Database</h2>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Creating Helyx User in Destination Database</h3>
                        <p className="text-gray-700 mb-4">In order for Helyx to perform replication, a dedicated database user with appropriate privileges must be created. This section describes the SQL commands required to create the helyx role, schema, and associated privileges on the destination database.</p>

                        <div className="space-y-3">
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`CREATE ROLE helyx WITH LOGIN REPLICATION PASSWORD 'password';
ALTER ROLE helyx WITH REPLICATION;`}</pre>
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`CREATE SCHEMA IF NOT EXISTS helyx AUTHORIZATION helyx;`}</pre>
                            <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`GRANT CONNECT ON DATABASE edb TO helyx;
GRANT CREATE ON DATABASE edb TO helyx;`}</pre>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Granting Schema Privileges for Helyx User</h3>
                        <p className="text-gray-700 mb-2">For schemas listed in <code className="bg-gray-100 px-1 rounded">include.schema.list</code> of the publication config, grant:</p>
                        <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`GRANT USAGE ON SCHEMA <schema_name> TO helyx;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA <schema_name> TO helyx;
GRANT CREATE ON SCHEMA <schema_name> TO helyx;
ALTER SCHEMA <schema_name> OWNER TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT ALL ON TABLES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO helyx;`}</pre>
                        <p className="text-gray-700 mt-2">Note: username will be same at source and destination with the same password.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Change subscription.config file</h3>
                        <p className="text-gray-700 mb-2">Edit <code className="bg-gray-100 px-1 rounded">/var/lib/helyx/replconfig/subscription.config</code> with:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto font-mono text-gray-900">{`"name": "",   // Unique identifier name
"tasks.max": "1",
"connection.url": "jdbc:postgresql://<Dest_ServerIP>:5444/edb?user=helyx&password=<password>",
"bootstrap.ip": "",  // Kafka IP
"retry.backoff.ms": "1000",
"consumer.max.poll.records": "1000",
"consumer.fetch.max.bytes": "10485760",
"batch.size": "5000",
"max.retries": "10"`}</pre>
                        <p className="text-yellow-700 mt-2"><span className="font-semibold">Note:</span> User name helyx will NOT be changed</p>
                    </div>


                    {/* Step 4: Use CLI Tool for Replication Management */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Step 4: Use CLI Tool for Replication Management</h2>
                        <p className="text-gray-700 mb-4">
                            Common usages of <code className="bg-gray-100 px-1 rounded">serverconfig</code>:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-gray-200 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left py-2.5 px-3 font-semibold text-gray-900 border-b">Action</th>
                                        <th className="text-left py-2.5 px-3 font-semibold text-gray-900 border-b">Command</th>
                                        <th className="text-left py-2.5 px-3 font-semibold text-gray-900 border-b">Copy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {commandsData.map((item) => (
                                        <tr key={item.id}>
                                            <td className="py-2.5 px-3 text-gray-800 font-medium">{item.action}</td>
                                            <td className="py-2.5 px-3">
                                                <code className="bg-gray-100 px-2 py-1 rounded text-gray-900 block break-words">
                                                    {item.command}
                                                </code>
                                            </td>
                                            <td className="py-2.5 px-3">
                                                <button
                                                    onClick={() => copyToClipboard(item.command, item.id)}
                                                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                                                    aria-label={`Copy ${item.action} command`}
                                                    title="Copy command"
                                                >
                                                    {copiedCommand === item.id ? (
                                                        <>
                                                            <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                                <polyline points="22 4 12 14.01 9 11.01" />
                                                            </svg>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <svg className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>



                    {/* Step 5: Set Up Destination Database (Manual Grants) */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Step 5: Set Up Destination Database (Manual Grants)</h2>
                        <p className="text-gray-700 mb-3">On destination DB, execute:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto font-mono text-gray-900 mb-4">{`CREATE ROLE helyx WITH LOGIN PASSWORD '<password>';
ALTER ROLE helyx WITH REPLICATION;
GRANT CREATE ON DATABASE <Database Name> TO helyx;
CREATE SCHEMA IF NOT EXISTS helyx AUTHORIZATION helyx;

GRANT USAGE ON SCHEMA <schema_name> TO helyx;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA <schema_name> TO helyx;
GRANT CREATE ON SCHEMA <schema_name> TO helyx;
ALTER SCHEMA <schema_name> OWNER TO helyx;

ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT ALL ON TABLES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT USAGE ON SEQUENCES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema_name> GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO helyx;`}</pre>
                        <p className="text-sm text-gray-700">Note: Please note that username will be same as source and destination database with same password.</p>
                    </div>


                    {/* Step 6: Start Replication & Monitor */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                            Step 6: Use CLI Tool for Starting Replication between servers
                        </h2>

                        {/* Header row (desktop only) */}
                        <div className="hidden md:grid grid-cols-2 gap-4 px-4 py-2 bg-gray-100 border border-gray-200 rounded-t-lg">
                            <h3 className="font-semibold text-gray-900">Action</h3>
                            <h3 className="font-semibold text-gray-900">Description</h3>
                        </div>

                        {/* Actions + Descriptions */}
                        <div className="divide-y border border-gray-200 rounded-b-lg">
                            {[
                                {
                                    action: "Create publication",
                                    desc: (
                                        <>
                                            Creates a logical publication on the source DB using{" "}
                                            <span className="font-mono">publication.config</span> and tables from{" "}
                                            <span className="font-mono">tablelist.config</span>.
                                        </>
                                    ),
                                },
                                {
                                    action: "Create subscription",
                                    desc: (
                                        <>
                                            Sets up the sink connector using{" "}
                                            <span className="font-mono">subscription.config</span>, and links it to the
                                            Kafka topics defined in the publication.
                                        </>
                                    ),
                                },
                                {
                                    action: "Add tables to publication",
                                    desc: <>Adds new tables so changes in those tables start replicating.</>,
                                },
                                {
                                    action: "Trigger ad-hoc snapshot",
                                    desc: <>Triggers a one-time snapshot for specified tables; useful for re-syncing.</>,
                                },
                                {
                                    action: "Monitor publication status",
                                    desc: <>Shows current status of the publication connector (active, paused, failed, etc.).</>,
                                },
                                {
                                    action: "Monitor subscription status",
                                    desc: <>Displays the running status of the Subscription and its tasks.</>,
                                },
                                {
                                    action: "Remove publication",
                                    desc: <>Completely stops and removes the publication configuration.</>,
                                },
                                {
                                    action: "Remove subscription",
                                    desc: <>Stops and deletes the Subscription configuration.</>,
                                },
                                {
                                    action: "Remove table from replication",
                                    desc: <>Removes selected tables from the ongoing replication setup.</>,
                                },
                                {
                                    action: "List connectors",
                                    desc: <>Lists all running Kafka connectors on the connect cluster.</>,
                                },
                                {
                                    action: "List tasks",
                                    desc: (
                                        <>Displays tasks of a connector, their IDs, and current status (running, failed, paused).</>
                                    ),
                                },
                                {
                                    action: "Lag statistics",
                                    desc: <>Shows replication lag metrics to monitor delay in syncing data to the destination.</>,
                                },
                                {
                                    action: "List replicated tables",
                                    desc: <>Lists all tables currently under replication from the source config.</>,
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-3 hover:bg-gray-50"
                                >
                                    <div className="font-medium text-gray-800">{item.action}</div>
                                    <div className="text-sm text-gray-700">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Command Reference */}
                        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-2">📌 Command Reference</h3>
                        <pre className="bg-green-50 border border-green-200 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -createpub -s publication.config -tables tablelist.config

serverconfig -createsub -s subscription.config -pub publication.config

serverconfig -addtabletopub -s publication.config -tables tablelist.config

serverconfig -adhocsnapshot -s publication.config -tables table1,table2

serverconfig -status -pub -s publication.config

serverconfig -status -sub -s subscription.config

serverconfig -remove -pub -s publication.config

serverconfig -remove -sub -s subscription.config

serverconfig -removetablefromrepl -s publication.config -tables table1,table2

serverconfig -encryptPassword -s publication.config

serverconfig -listconnectors -s publication.config

serverconfig -listtask -s publication.config

serverconfig -lagstat -s subscription.config

serverconfig -tablelist -s publication.config`}</pre>

                        {/* Start & Monitor */}
                        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Start & Monitor</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-gray-700 mb-1">▶ Start the Publication</p>
                                <pre className="bg-green-50 border border-green-200 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -createpub -s publication.config -tables tablelist.config`}</pre>
                            </div>
                            <div>
                                <p className="text-gray-700 mb-1">▶ Start the Subscription</p>
                                <pre className="bg-green-50 border border-green-200 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -createsub -s subscription.config -pub publication.config`}</pre>
                            </div>
                            <div>
                                <p className="text-gray-700 mb-1">▶ Monitor Status</p>
                                <pre className="bg-blue-50 border border-blue-200 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -status -pub -s publication.config
serverconfig -status -sub -s subscription.config`}</pre>
                            </div>
                        </div>
                    </div>



                    {/* Final Checklist */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Final Checklist</h2>
                        </div>
                        <div className="space-y-3">
                            {[
                                "sync-manager, broker, Connect, Schema Registry running",
                                "Source publication.config configured",
                                "Destination subscription.config configured",
                                "Grants applied to source and destination DBs",
                                "Topics appearing in Kafka",
                                "Messages flowing to sink",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm text-gray-900">{item}</span>
                                    <span className="ml-auto py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium">✅</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Schema Evolution */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Schema Evolution: Add Column to Replicated Table</h2>
                        <p className="text-gray-700 mb-4">If you want to add a new column to a table that is already being replicated, follow these steps carefully:</p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Purpose</h3>
                        <p className="text-gray-700 mb-4">To safely add a new column to an existing replicated table and synchronize the schema with downstream systems.</p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Steps</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-gray-700 my-1">1) Stop the Connect Worker service:</p>
                                <pre className="bg-gray-100 p-2 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`systemctl stop connect.service`}</pre>
                                <p className="text-gray-600 my-2">This ensures that no replication occurs during the schema update.</p>
                            </div>

                            <div>
                                <p className="text-gray-700 my-2">2) Add the column in the source database:</p>
                                <pre className="bg-gray-100 p-2 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`ALTER TABLE <schema>.<table_name> ADD COLUMN <new_column_name> <datatype>;`}</pre>
                            </div>

                            <div>
                                <p className="text-gray-700 my-2">3) Start the Connect Worker service:</p>
                                <pre className="bg-gray-100 p-2 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`systemctl start connect.service`}</pre>
                                <p className="text-gray-600 my-2">The connector will reload the schema change and start applying changes again.</p>
                            </div>

                            <div>
                                <p className="text-gray-700 mb-1">4) Trigger an ad-hoc snapshot for the updated table:</p>
                                <pre className="bg-gray-100 p-2 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -adhocsnapshot -s publication.config -tables <table_name>`}</pre>
                                <p className="text-gray-600 my-2">This ensures the new column is picked up and replicated to the destination database.</p>
                            </div>
                        </div>
                    </div>


                    {/* Monitoring & Troubleshooting */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 lg:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Monitor className="h-5 w-5 text-blue-600" />
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Monitoring &amp; Troubleshooting</h2>
                        </div>

                        <div className="space-y-4 text-gray-800">
                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Check Helyx Connect logs:</h4>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`tail -f /var/lib/helyx/logs/connect.log`}</pre>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Validate Schema Registry:</h4>
                                <p className="text-sm text-gray-700">
                                    Visit: <code className="bg-gray-100 px-2 py-1 rounded font-mono text-gray-900">http://&lt;schema-registry&gt;:8081/subjects</code>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Monitor replication lag:</h4>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -lagstat -s subscription.config`}</pre>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Need help?</h4>
                                <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900 overflow-x-auto">{`serverconfig -help`}</pre>
                            </div>
                        </div>
                    </div>


                    {/* Footer Note */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                        <p className="text-center text-sm text-yellow-800">
                            <strong>Note:</strong> Always test on a staging environment before applying to production.
                        </p>
                        <p className="text-center text-lg mt-2 font-medium text-gray-700">Happy Replication! 🚀</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
