import { Button, Dropdown, MultiSelect, Search } from "@carbon/react";

const SOURCE_MOCK = [
  { id: 1, text: 'Development Env' },
  { id: 2, text: 'Stage Env' },
  { id: 3, text: 'Production Env' }
];

const INTERVALS_MOCK = [
  { id: 1, text: 'last year'},
  { id: 2, text: 'last month'},
  { id: 3, text: 'last 14 days'},
  { id: 4, text: 'last 7 days'},
  { id: 1, text: 'yesterday'},
  { id: 1, text: 'today'}
]

const LogsHeaderComponent = () => (
  <header className="logs-header">
    <h2>Logs</h2>
    <form>
      <MultiSelect id="source" label="Sources" items={SOURCE_MOCK} itemToString={(item) => item?.text || ''} />
      <Dropdown id="intervals" label="Interval" items={INTERVALS_MOCK} itemToString={(item) => item?.text || ''} />
      <Search id="search" labelText="Search" placeholder="start typying your query" />
      <Button>Run query</Button>
    </form>
  </header>
);

export default LogsHeaderComponent;
