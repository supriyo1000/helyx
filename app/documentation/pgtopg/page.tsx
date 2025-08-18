
"use client"

import { useState } from "react"
import { Database, Settings, Play, Monitor, CheckCircle, Copy } from "lucide-react"
// import jsPDF from "jspdf"
// import html2canvas from "html2canvas"
// import { PDFDownloadLink } from "@react-pdf/renderer"
// import PDFDocument from "@/components/PostgresReplicationPDF"
// import PDFDownloadButton from "@/components/PDFDownloadButton"
// import HTML2PDFButton from "@/components/HTML2PDFButton"
import DownloadButton from "@/components/ui/DownloadButton"
import Navigation from "@/components/features/navigation"

export default function PostgreSQLReplicationDocs() {
    // const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
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
            command: "java -jar serverconfig.jar -createpub -s publication.config -tables tablelist.config",
        },
        {
            id: "create-sub",
            action: "Create subscription",
            command: "java -jar serverconfig.jar -createsub -s subscription.config -pub publication.config",
        },
        {
            id: "add-tables",
            action: "Add tables to publication",
            command: "java -jar serverconfig.jar -addtabletopub -s publication.config -tables tablelist.config",
        },
        {
            id: "snapshot",
            action: "Trigger ad-hoc snapshot",
            command: "java -jar serverconfig.jar -adhocsnapshot -s publication.config -tables table1,table2",
        },
        {
            id: "status-pub",
            action: "Monitor publication status",
            command: "java -jar serverconfig.jar -status -pub -s publication.config",
        },
        {
            id: "status-sub",
            action: "Monitor subscription status",
            command: "java -jar serverconfig.jar -status -sub -s subscription.config",
        },
        {
            id: "remove-pub",
            action: "Remove publication",
            command: "java -jar serverconfig.jar -remove -pub -s publication.config",
        },
        {
            id: "remove-sub",
            action: "Remove subscription",
            command: "java -jar serverconfig.jar -remove -sub -s subscription.config",
        },
        {
            id: "remove-table",
            action: "Remove table from replication",
            command: "java -jar serverconfig.jar -removetablefromrepl -s publication.config -tables table1,table2",
        },
        {
            id: "encrypt",
            action: "Encrypt password",
            command: "java -jar serverconfig.jar -encryptPassword -s publication.config",
        },
        {
            id: "list-connectors",
            action: "List connectors",
            command: "java -jar serverconfig.jar -listconnectors -s publication.config",
        },
        {
            id: "list-tasks",
            action: "List tasks",
            command: "java -jar serverconfig.jar -listtask -s publication.config",
        },
        {
            id: "lag-stats",
            action: "Lag statistics",
            command: "java -jar serverconfig.jar -lagstat -s subscription.config",
        },
        {
            id: "table-list",
            action: "List replicated tables",
            command: "java -jar serverconfig.jar -tablelist -s publication.config",
        },
    ]

    const checklistItems = [
        "Replication Server, Connect, Zookeeper, Schema Registry running",
        "Source publication.config configured",
        "Destination subscription.config configured",
        "Grants applied to source and destination DBs",
        "Topics appearing in Kafka",
        "Messages flowing to sink",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-x-hidden">
            <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-white border-b border-gray-200 px-6 py-2.5 sm:px-3.5">
                <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
                    <a
                        className="text-sm flex items-center sm:text-[0.93rem] text-gray-900 hover:opacity-80 transition-opacity"
                        href="https://heroui.chat"
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
            <Navigation/>
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
                    {/* <button
                        onClick={generatePDF}
                        disabled={isGeneratingPDF}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center mx-auto transition-colors"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        {isGeneratingPDF ? "Generating PDF..." : "Download PDF Guide"}
                    </button> */}
                    {/* <PDFDownloadLink
                        document={<PDFDocument />}
                        fileName="PostgreSQL-Replication-Guide.pdf"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center mx-auto transition-colors"
                    >
                        {({ loading }) => (
                            <>
                                <Download className="mr-2 h-4 w-4" />
                                {loading ? "Preparing PDF..." : "Download PDF Guide"}
                            </>
                        )}
                    </PDFDownloadLink> */}

                    {/* <PDFDownloadButton /> */}

                    {/* <HTML2PDFButton/> */}
                    <DownloadButton />

                </div>

                {/* Documentation Content */}
                <div id="documentation-content" className="space-y-8">
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
                                    PostgreSQL or EDB installed
                                </span>
                            </div>
                            <div className="space-y-2">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    JDBC connectors
                                </span>
                                <br />
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    tabletorepl.jar
                                </span>
                                <br />
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    serverconfig.jar
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Directory Structure */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Directory Structure</h2>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-900 font-mono overflow-x-auto">
                            {`/configs
  ├── publication.config
  ├── subscription.config
  ├── tablelist.config
/jars
  ├── tabletorepl.jar
  └── serverconfig.jar`}
                        </pre>
                    </div>

                    {/* Step 1: Setup Replication Services */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Play className="h-5 w-5 text-blue-600" />
                            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Step 1: Setup Replication & Related Services</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">Zookeeper:</h4>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-900">
                                        <code>systemctl start zookeeper</code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard("systemctl start zookeeper", "zookeeper")}
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "zookeeper" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">Kafka Broker:</h4>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-900">
                                        <code>systemctl start kafka</code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard("systemctl start kafka", "kafka")}
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "kafka" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">Replication Connectors:</h4>
                                <p className="text-sm font-medium text-gray-900 mb-2">Edit connect-distributed.properties:</p>
                                <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm font-medium text-gray-900">
                                    {`key.converter=io.confluent.connect.avro.AvroConverter
value.converter=io.confluent.connect.avro.AvroConverter
key.converter.schema.registry.url=http://<Server-ip>:8081
value.converter.schema.registry.url=http://<Server-ip>:8081`}
                                </pre>
                                <p className="text-sm text-gray-600 mt-2 mb-2">Then start:</p>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 overflow-x-auto rounded text-sm font-medium text-gray-900">
                                        <code>systemctl start connect-distributed</code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard("systemctl start connect-distributed", "connect")}
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "connect" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">Schema Registry:</h4>
                                <p className="text-sm text-gray-600 mb-2">Edit schema-registry.properties:</p>
                                <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm font-medium text-gray-900">
                                    {`kafkastore.bootstrap.servers=PLAINTEXT://<server-ip>:9092
listeners=http://0.0.0.0:8081`}
                                </pre>
                                <p className="text-sm text-gray-600 mt-2 mb-2">Start the service:</p>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-900">
                                        <code>systemctl start schema-registry</code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard("systemctl start schema-registry", "schema")}
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "schema" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Configure Source Database */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Step 2: Configure Source Database (Publication)</h2>
                        <p className="text-gray-600 mb-4">Edit publication.config with the following keys:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6 font-medium text-red-700">
                            {`"name": "",                       // Unique identifier
"tasks.max": "1",                // Parallelism level
"database.type": "edb",          // edb or postgresql
"database.hostname": "",         // Source DB IP
"database.port": "5444",         // Source DB Port
"database.password": "",         // Source DB user password
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
"producer.max.request.size": "10485760"`}
                        </pre>

                        <div className="border-t border-gray-200 pt-6">
                            <h4 className="font-semibold mb-2 text-gray-900">Grant Source Permissions Automatically</h4>
                            <p className="text-sm text-gray-600 mb-2">Enter comma-separated table list in tablelist.config:</p>
                            <pre className="bg-gray-100 p-3 rounded text-sm mb-3 font-medium text-gray-900">
                                {`Schema1.Table1,
Schema2.Table2,
Schema2.Table3`}
                            </pre>
                            <p className="text-sm text-gray-600 mb-2">Run tabletorepl.jar for necessary privileges:</p>
                            <div className="relative">
                                <pre className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                    <code>
                                        java -jar tabletorepl.jar -s &lt;path_to_publication.config&gt; -tables
                                        &lt;path_to_tablelist.config&gt;
                                    </code>
                                </pre>
                                <button
                                    onClick={() =>
                                        copyToClipboard(
                                            "java -jar tabletorepl.jar -s <path_to_publication.config> -tables <path_to_tablelist.config>",
                                            "tabletorepl",
                                        )
                                    }
                                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors z-10"
                                >
                                    {copiedCommand === "tabletorepl" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Configure Destination Database */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Step 3: Configure Destination Database</h2>
                        <p className="text-gray-600 mb-4">Edit subscription.config with the following keys:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto font-medium text-red-700">
                            {`"name": "",   // Unique identifier
"tasks.max": "1",
"connection.url": "jdbc:postgresql://<Dest_ServerIP>:5444/edb?user=helyx&password=<password>",
"bootstrap.ip": "",  // Kafka IP
"retry.backoff.ms": "1000",
"consumer.max.poll.records": "1000",
"consumer.fetch.max.bytes": "10485760",
"batch.size": "5000",
"max.retries": "10"`}
                        </pre>
                        <p className="text-yellow-600 mt-2">
                            <strong>Note:</strong> User name helyx will NOT be changed
                        </p>
                    </div>

                    {/* Step 4: CLI Tool Commands */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Step 4: CLI Tool for Replication Management</h2>
                        <p className="text-gray-600 mb-6">Common usage commands for serverconfig.jar</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse table-auto">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 text-gray-900 font-semibold">Action</th>
                                        <th className="text-left py-3 px-4 text-gray-900 font-semibold">Command</th>
                                        <th className="text-left py-3 px-4 text-gray-900 font-semibold">Copy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {commandsData.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-100">
                                            <td className="py-3 px-4 text-gray-700 font-medium">{item.action}</td>
                                            <td className="py-3 px-4">
                                                <code className="text-sm bg-gray-100 p-2 rounded text-gray-900 block break-all">
                                                    {item.command}
                                                </code>
                                            </td>
                                            <td className="py-3 px-4">
                                                <button
                                                    onClick={() => copyToClipboard(item.command, item.id)}
                                                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                                >
                                                    {copiedCommand === item.id ? (
                                                        <CheckCircle className="h-4 w-4" />
                                                    ) : (
                                                        <Copy className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Step 5: Destination Database Grants */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                            Step 5: Set Up Destination Database (Manual Grants)
                        </h2>
                        <p className="text-gray-600 mb-4">Execute these commands on the destination database:</p>
                        <div className="relative">
                            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto font-medium text-green-700">
                                {`CREATE ROLE helyx WITH LOGIN PASSWORD '<password>';
ALTER ROLE helyx WITH REPLICATION;
GRANT CREATE ON DATABASE <Database Name> TO helyx;
CREATE SCHEMA IF NOT EXISTS helyx AUTHORIZATION helyx;

GRANT USAGE ON SCHEMA <Custom Schema Name> TO helyx;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA <Custom Schema Name> TO helyx;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO helyx;
GRANT CREATE ON SCHEMA <Custom Schema Name> TO helyx;
GRANT CREATE ON SCHEMA public TO helyx;
ALTER SCHEMA <Custom Schema Name> OWNER TO helyx;
ALTER SCHEMA public OWNER TO helyx;

ALTER DEFAULT PRIVILEGES IN SCHEMA <Custom Schema Name> GRANT ALL ON TABLES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <Custom Schema Name> GRANT USAGE ON SEQUENCES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE ON SEQUENCES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <Custom Schema Name> GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO helyx;`}
                            </pre>
                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        `CREATE ROLE helyx WITH LOGIN PASSWORD '<password>';
ALTER ROLE helyx WITH REPLICATION;
GRANT CREATE ON DATABASE <Database Name> TO helyx;
CREATE SCHEMA IF NOT EXISTS helyx AUTHORIZATION helyx;

GRANT USAGE ON SCHEMA <Custom Schema Name> TO helyx;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA <Custom Schema Name> TO helyx;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO helyx;
GRANT CREATE ON SCHEMA <Custom Schema Name> TO helyx;
GRANT CREATE ON SCHEMA public TO helyx;
ALTER SCHEMA <Custom Schema Name> OWNER TO helyx;
ALTER SCHEMA public OWNER TO helyx;

ALTER DEFAULT PRIVILEGES IN SCHEMA <Custom Schema Name> GRANT ALL ON TABLES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <Custom Schema Name> GRANT USAGE ON SEQUENCES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE ON SEQUENCES TO helyx;
ALTER DEFAULT PRIVILEGES IN SCHEMA <Custom Schema Name> GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO helyx;`,
                                        "grants",
                                    )
                                }
                                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {copiedCommand === "grants" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Step 6: Starting Replication */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Play className="h-5 w-5 text-blue-600" />
                            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Step 6: Starting Replication</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">▶️ Start the Publication</h4>
                                <div className="relative">
                                    <pre className="bg-green-50 border border-green-200 p-3 rounded text-sm font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                        <code>java -jar serverconfig.jar -createpub -s publication.config -tables tablelist.config</code>
                                    </pre>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                "java -jar serverconfig.jar -createpub -s publication.config -tables tablelist.config",
                                                "start-pub",
                                            )
                                        }
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "start-pub" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">▶️ Start the Subscription</h4>
                                <div className="relative">
                                    <pre className="bg-green-50 border border-green-200 p-3 rounded text-sm font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                        <code>java -jar serverconfig.jar -createsub -s subscription.config -pub publication.config</code>
                                    </pre>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                "java -jar serverconfig.jar -createsub -s subscription.config -pub publication.config",
                                                "start-sub",
                                            )
                                        }
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "start-sub" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2 text-gray-900">▶️ Monitor Connector Status</h4>
                                <div className="relative">
                                    <pre className="bg-blue-50 border border-blue-200 p-3 rounded text-sm font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                        {`java -jar serverconfig.jar -status -pub -s publication.config
java -jar serverconfig.jar -status -sub -s subscription.config`}
                                    </pre>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                `java -jar serverconfig.jar -status -pub -s publication.config
java -jar serverconfig.jar -status -sub -s subscription.config`,
                                                "monitor",
                                            )
                                        }
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "monitor" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Checklist */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Final Checklist</h2>
                        </div>
                        <div className="space-y-3">
                            {checklistItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm text-gray-900">{item}</span>
                                    <span className="ml-auto py-1 px-3 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                                        ✅
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Schema Evolution */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Schema Evolution: Add Column to Replicated Table</h2>
                        <p className="text-gray-600 mb-6">Steps to safely add a new column to an existing replicated table</p>
                        <div className="space-y-4">
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">1. Stop the Connect Worker service:</h4>
                                    <div className="relative">
                                        <pre className="bg-gray-100 p-2 rounded text-sm mt-1 font-medium text-gray-900">
                                            <code>systemctl stop connect-distributed</code>
                                        </pre>
                                        <button
                                            onClick={() => copyToClipboard("systemctl stop connect-distributed", "stop-connect")}
                                            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            {copiedCommand === "stop-connect" ? (
                                                <CheckCircle className="h-4 w-4" />
                                            ) : (
                                                <Copy className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">2. Add the column in the source database:</h4>
                                    <div className="relative">
                                        <pre className="bg-gray-100 p-2 rounded text-sm mt-1 font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                            <code>
                                                ALTER TABLE &lt;schema&gt;.&lt;table_name&gt; ADD COLUMN &lt;new_column_name&gt;
                                                &lt;datatype&gt;;
                                            </code>
                                        </pre>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    "ALTER TABLE <schema>.<table_name> ADD COLUMN <new_column_name> <datatype>;",
                                                    "alter-table",
                                                )
                                            }
                                            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            {copiedCommand === "alter-table" ? (
                                                <CheckCircle className="h-4 w-4" />
                                            ) : (
                                                <Copy className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">3. Start the Connect Worker service:</h4>
                                    <div className="relative">
                                        <pre className="bg-gray-100 p-2 rounded text-sm mt-1 font-medium text-gray-900">
                                            <code>systemctl start connect-distributed</code>
                                        </pre>
                                        <button
                                            onClick={() => copyToClipboard("systemctl start connect-distributed", "start-connect")}
                                            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            {copiedCommand === "start-connect" ? (
                                                <CheckCircle className="h-4 w-4" />
                                            ) : (
                                                <Copy className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-sm text-gray-900">4. Trigger an ad-hoc snapshot:</h4>
                                    <div className="relative">
                                        <pre className="bg-gray-100 p-2 rounded text-sm mt-1 font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                            <code>
                                                java -jar serverconfig.jar -adhocsnapshot -s publication.config -tables &lt;table_name&gt;
                                            </code>
                                        </pre>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    "java -jar serverconfig.jar -adhocsnapshot -s publication.config -tables <table_name>",
                                                    "snapshot-table",
                                                )
                                            }
                                            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            {copiedCommand === "snapshot-table" ? (
                                                <CheckCircle className="h-4 w-4" />
                                            ) : (
                                                <Copy className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Monitoring & Troubleshooting */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Monitor className="h-5 w-5 text-blue-600" />
                            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Monitoring & Troubleshooting</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Check Kafka logs:</h4>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-900">
                                        <code>tail -f /var/log/kafka/kafka.log</code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard("tail -f /var/log/kafka/kafka.log", "kafka-logs")}
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "kafka-logs" ? (
                                            <CheckCircle className="h-4 w-4" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Validate Avro schema:</h4>
                                <p className="text-sm text-gray-600">
                                    Visit:{" "}
                                    <code className="bg-gray-100 px-2 py-1 rounded font-medium text-gray-900">http://&lt;schema-registry&gt;:8081/subjects</code>
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Monitor replication lag:</h4>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-900 overflow-x-auto max-w-full whitespace-pre-wrap break-words pr-12">
                                        <code>java -jar serverconfig.jar -lagstat -s subscription.config</code>
                                    </pre>
                                    <button
                                        onClick={() =>
                                            copyToClipboard("java -jar serverconfig.jar -lagstat -s subscription.config", "lag-stat")
                                        }
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "lag-stat" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-2 text-gray-900">Get help:</h4>
                                <div className="relative">
                                    <pre className="bg-gray-100 p-3 rounded text-sm font-medium text-gray-900">
                                        <code>java -jar serverconfig.jar -help</code>
                                    </pre>
                                    <button
                                        onClick={() => copyToClipboard("java -jar serverconfig.jar -help", "help")}
                                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        {copiedCommand === "help" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
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
