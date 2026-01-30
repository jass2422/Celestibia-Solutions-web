// Platform and tool logos for Data Engineering and Security pages
import snowflakeLogo from "@/assets/logos/snowflake.svg";
import databricksLogo from "@/assets/logos/databricks.svg";
import bigqueryLogo from "@/assets/logos/bigquery.svg";
import redshiftLogo from "@/assets/logos/redshift.svg";
import sparkLogo from "@/assets/logos/spark.svg";
import airflowLogo from "@/assets/logos/airflow.svg";
import dbtLogo from "@/assets/logos/dbt.svg";
import kafkaLogo from "@/assets/logos/kafka.svg";
import flinkLogo from "@/assets/logos/flink.svg";
import tableauLogo from "@/assets/logos/tableau.svg";
import powerbiLogo from "@/assets/logos/powerbi.svg";
import lookerLogo from "@/assets/logos/looker.svg";
import deltalakeLogo from "@/assets/logos/deltalake.svg";
import icebergLogo from "@/assets/logos/iceberg.svg";
import glueLogo from "@/assets/logos/glue.svg";
import kinesisLogo from "@/assets/logos/kinesis.svg";
import greatExpectationsLogo from "@/assets/logos/great-expectations.png";
import datahubLogo from "@/assets/logos/datahub.svg";

import { 
  Shield, 
  FileCheck, 
  Lock, 
  Globe, 
  Server, 
  Gauge, 
  Cloud,
  Building2
} from "lucide-react";

export interface PlatformItem {
  name: string;
  logo?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Data Engineering Platforms
export const dataEngineeringPlatforms: PlatformItem[] = [
  { name: "Snowflake", logo: snowflakeLogo },
  { name: "Databricks", logo: databricksLogo },
  { name: "BigQuery", logo: bigqueryLogo },
  { name: "Redshift", logo: redshiftLogo },
  { name: "Apache Spark", logo: sparkLogo },
  { name: "Airflow", logo: airflowLogo },
  { name: "dbt", logo: dbtLogo },
  { name: "Kafka", logo: kafkaLogo },
  { name: "Flink", logo: flinkLogo },
  { name: "Tableau", logo: tableauLogo },
  { name: "Power BI", logo: powerbiLogo },
  { name: "Looker", logo: lookerLogo },
  { name: "Delta Lake", logo: deltalakeLogo },
  { name: "Iceberg", logo: icebergLogo },
  { name: "Glue", logo: glueLogo },
  { name: "Kinesis", logo: kinesisLogo },
  { name: "Great Expectations", logo: greatExpectationsLogo },
  { name: "DataHub", logo: datahubLogo },
];

// Compliance Frameworks with appropriate icons
export const complianceFrameworkItems: PlatformItem[] = [
  { name: "SOC 2", icon: Shield },
  { name: "HIPAA", icon: FileCheck },
  { name: "PCI-DSS", icon: Lock },
  { name: "GDPR", icon: Globe },
  { name: "ISO 27001", icon: Shield },
  { name: "NIST", icon: Server },
  { name: "CIS Benchmarks", icon: Gauge },
  { name: "FedRAMP", icon: Building2 },
];

interface PlatformBadgeProps {
  platform: PlatformItem;
  index: number;
  variant?: "data" | "security";
}

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform, index, variant = "data" }) => {
  const gradientClass = variant === "data" 
    ? "from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20"
    : "from-red-500/10 to-orange-500/10 hover:from-red-500/20 hover:to-orange-500/20";
  
  const borderHoverClass = variant === "data"
    ? "hover:border-green-500/50"
    : "hover:border-red-500/50";

  const iconColorClass = variant === "data"
    ? "text-green-600 group-hover:text-green-500"
    : "text-red-600 group-hover:text-red-500";

  return (
    <div
      className={`flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${gradientClass} border border-border ${borderHoverClass} transition-all duration-300 cursor-default group`}
    >
      {platform.logo ? (
        <img 
          src={platform.logo} 
          alt={platform.name} 
          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
        />
      ) : platform.icon ? (
        <platform.icon className={`w-5 h-5 ${iconColorClass} transition-colors`} />
      ) : null}
      <span className="font-medium text-foreground whitespace-nowrap">{platform.name}</span>
    </div>
  );
};
