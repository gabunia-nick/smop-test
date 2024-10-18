import { columns } from "../logs-table-header/logs-table-header.config";
import LogsTableComponent from "./logs-table.component";

const LogsTableContainer = () => <LogsTableComponent columns={columns} />;

export default LogsTableContainer;
