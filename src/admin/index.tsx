import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostList from '@/components/PostList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function App() {
  return (
    <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList}/>
    <Resource name="comments" />
  </Admin>
  )
}
