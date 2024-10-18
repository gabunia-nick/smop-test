import { Dropdown, MultiSelect } from "@carbon/react";
import { columns, levels } from "./logs-table-header.config";

const LogsTableHeaderComponent = () => (
  <form className="logs-table-header">
    <MultiSelect id="columns" label="Table Columns" items={columns} itemToString={(item) => item.text} />
    <Dropdown id="levels" label="Levels" items={levels} itemToString={(item) => item?.text || ''} initialSelectedItem={levels[0]} />
  </form>
);

export default LogsTableHeaderComponent;
