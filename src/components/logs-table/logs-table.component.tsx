import { DataTable, Table, TableBody, TableCell, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow } from "@carbon/react";
import LogsTableHeader from "../logs-table-header";
import { Fragment } from "react";

type Props = {
  columns: { id: string; text: string }[];
}

const logs = [
  { id: 'log_1', timestamp: '2024-10-18T10:00:00Z', level: 'info', service: 'auth', log: 'User logged in successfully after completing the necessary multi-factor authentication process, which involved both email and SMS verification steps.' },
  { id: 'log_2', timestamp: '2024-10-18T10:05:00Z', level: 'error', service: 'auth', log: 'Login failed for user with username "john_doe_99", encountering an unexpected validation error related to incorrect password format despite multiple attempts to rectify it.' },
  { id: 'log_3', timestamp: '2024-10-18T10:10:00Z', level: 'debug', service: 'payments', log: 'Payment process started for transaction ID 1234567890 with an amount of $45.99, initiating the standard authorization sequence and checking against fraud detection algorithms.' },
  { id: 'log_4', timestamp: '2024-10-18T10:15:00Z', level: 'info', service: 'payments', log: 'Payment successful for user with email "user@example.com", confirming the transaction completion and updating the order status in the system database accordingly.' },
  { id: 'log_5', timestamp: '2024-10-18T10:20:00Z', level: 'error', service: 'payments', log: 'Payment failed due to insufficient funds in the account linked to the credit card ending in 1234, prompting the user to check their account balance or try a different payment method.' },
  { id: 'log_6', timestamp: '2024-10-18T10:25:00Z', level: 'debug', service: 'notifications', log: 'Notification sent to user with ID 789, detailing the latest updates and offers in the context of the weekly newsletter subscription they opted into previously.' },
  { id: 'log_7', timestamp: '2024-10-18T10:30:00Z', level: 'info', service: 'notifications', log: 'User with ID 789 successfully subscribed to notifications regarding promotional offers, including future alerts for discounts and events related to their purchase history.' },
  { id: 'log_8', timestamp: '2024-10-18T10:35:00Z', level: 'error', service: 'notifications', log: 'Failed to send notification to user with ID 789 due to a system error related to the messaging service being temporarily unavailable, resulting in a retry attempt.' },
  { id: 'log_9', timestamp: '2024-10-18T10:40:00Z', level: 'debug', service: 'users', log: 'User data retrieved for user ID 456, including personal details, account status, and last login information, processed for display in the admin dashboard.' },
  { id: 'log_10', timestamp: '2024-10-18T10:45:00Z', level: 'info', service: 'users', log: 'User profile updated successfully for user with ID 456, reflecting the latest changes made to their contact information and privacy settings.' },
  { id: 'log_11', timestamp: '2024-10-18T10:50:00Z', level: 'error', service: 'users', log: 'User not found in the system when attempting to access the profile page, indicating a potential issue with the user database integrity or incorrect user ID input.' },
  { id: 'log_12', timestamp: '2024-10-18T10:55:00Z', level: 'debug', service: 'api', log: 'API request received for endpoint /v1/resource, initiating the request validation process and checking headers for authentication tokens.' },
  { id: 'log_13', timestamp: '2024-10-18T11:00:00Z', level: 'info', service: 'api', log: 'API response sent for request ID 9876543210, containing a payload of user data in JSON format, including additional metadata regarding the request processing time.' },
  { id: 'log_14', timestamp: '2024-10-18T11:05:00Z', level: 'error', service: 'api', log: 'API endpoint not found when attempting to access /v1/unknown, resulting in a 404 error response being returned to the client with details logged for further investigation.' },
  { id: 'log_15', timestamp: '2024-10-18T11:10:00Z', level: 'debug', service: 'analytics', log: 'Analytics data processed for the past 30 days, compiling user engagement metrics and generating reports for review by the marketing department.' },
  { id: 'log_16', timestamp: '2024-10-18T11:15:00Z', level: 'info', service: 'analytics', log: 'User activity logged successfully for user ID 789, tracking interactions across various sections of the application to enhance personalized user experience.' },
  { id: 'log_17', timestamp: '2024-10-18T11:20:00Z', level: 'error', service: 'analytics', log: 'Data processing error occurred during the aggregation of user metrics, necessitating a fallback to backup data sets and triggering alerts for engineering team.' },
  { id: 'log_18', timestamp: '2024-10-18T11:25:00Z', level: 'debug', service: 'search', log: 'Search query executed with parameters: query="latest tech trends", filters applied: category=technology, date_range=last_month, processing response from search service.' },
  { id: 'log_19', timestamp: '2024-10-18T11:30:00Z', level: 'info', service: 'search', log: 'Search results returned for query with ID 123456, providing users with a curated list of articles and resources based on their search preferences and history.' },
  { id: 'log_20', timestamp: '2024-10-18T11:35:00Z', level: 'error', service: 'search', log: 'Search service unavailable at the moment due to unexpected downtime, preventing user queries from being processed and displayed on the front-end interface.' },
  { id: 'log_21', timestamp: '2024-10-18T11:40:00Z', level: 'debug', service: 'cache', log: 'Cache entry created for user preferences with ID 456, ensuring that subsequent requests retrieve data efficiently without hitting the database unnecessarily.' },
  { id: 'log_22', timestamp: '2024-10-18T11:45:00Z', level: 'info', service: 'cache', log: 'Cache hit recorded for user ID 789, resulting in a significant performance boost as the application served previously stored data instead of querying the database.' },
  { id: 'log_23', timestamp: '2024-10-18T11:50:00Z', level: 'error', service: 'cache', log: 'Cache miss encountered for user session ID 654, leading to a fallback procedure that required querying the database, thus impacting response time.' },
  { id: 'log_24', timestamp: '2024-10-18T11:55:00Z', level: 'debug', service: 'files', log: 'File upload initiated for document with name "financial_report_Q3_2024.pdf", triggering the validation of file type and size before proceeding with the upload.' },
  { id: 'log_25', timestamp: '2024-10-18T12:00:00Z', level: 'info', service: 'files', log: 'File uploaded successfully with unique identifier 987654321, ensuring that it is accessible for future retrieval by the user and logged for audit purposes.' },
  { id: 'log_26', timestamp: '2024-10-18T12:05:00Z', level: 'error', service: 'files', log: 'File upload failed for user ID 789 due to a timeout error while communicating with the storage service, requiring immediate investigation to identify underlying issues.' }
];

const LogsTableComponent = ({ columns }: Props) => (
  <div className="logs-table">
    <LogsTableHeader />
    <DataTable rows={logs} headers={[...columns.map((col) => ({ header: col.text, key: col.id })), { key: 'log', header: 'Log' }]}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableExpandHeader />
              {headers.map((header) => (
                <TableHeader className={`logs-table__${header.key}`} {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row, index) => (
            <Fragment key={row.id}>
              <TableExpandRow {...getRowProps({ row })}>
                {row.cells.map((cell, index) => (
                  <TableCell className={`logs-cell logs-cell__${headers[index].key}`} key={cell.id}>
                    {headers[index].key === 'log' ? <p>{cell.value}</p> : cell.value}
                  </TableCell>
                ))}
              </TableExpandRow>
              <TableExpandedRow colSpan={headers.length + 1}>
                {logs[index].log}
              </TableExpandedRow>
            </Fragment>
          ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  </div>
);

export default LogsTableComponent;
