export interface IProvider {
  access_group_name: string;
  access_group_id: number;
  total_uses: number;
  sessions: [
    {
      name: string;
      id: number;
    }
  ];
  event_id: number;
  structure_decode: boolean;
  name: string;
  modified: string | Date;
  id: number;
  basic_product_id: number;
}
