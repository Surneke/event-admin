import React from 'react';
import { List,Datagrid,TextField,DateField,EditButton,DeleteButton} from 'react-admin';

function PostList(props: any) {
  return (
    <List {...props} pagination={false}>
      <Datagrid>
        <TextField source="title" />
        <EditButton />
        <DeleteButton />
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
}

export default PostList