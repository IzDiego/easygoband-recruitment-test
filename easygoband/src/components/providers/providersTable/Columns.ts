import moment from "moment";
import type { IProvider } from "../../../interfaces/IProvider";

export interface ICustomRenderProviders {
  text: string;
  record: IProvider;
  index?: number;
}

const columns = (filteredInfo?: any, filterOptions?: any) => [
  {
    title: "ID",
    dataIndex: "id",
    width: 50,
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
    //sorter: (a: any, b: any) => a.user.localeCompare(b.user),
    /* filteredValue: filteredInfo?.user || null,
    filters: filterOptions.user,
    onFilter: (value: string, record: any) => {
      return record.user.includes(value);
    }, */
  },
  {
    title: "Session",
    dataIndex: "sessions",
    width: 150,
    customRender: ({ text, record }: ICustomRenderProviders) => {
      return record.sessions[0].name;
    },
  },
  {
    title: "Modified date",
    dataIndex: "shift",
    width: 100,
    customRender: ({ text, record }: ICustomRenderProviders) => {
      return moment(record.modified).utc().format("YYYY-MM-DD HH:mm");
    },
  },
];

export default columns;
