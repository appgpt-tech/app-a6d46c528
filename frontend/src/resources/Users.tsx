//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const UsersTitle = () => {
  const record = useRecordContext();
  return <span>Users {record ? `"${record.userID}"` : ''}</span>;
};

export const UsersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="userID" />
      <TextField source="name" />
      <TextField source="contactInformation" />
      <TextField source="medicalHistory" />
      <ReferenceField source="preferredHospital" reference="Hospitals" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const UsersEdit = () => (
  <Edit title={<UsersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="userID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="contactInformation" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medicalHistory" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="preferredHospital" reference="Hospitals" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const UsersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="userID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="contactInformation" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="medicalHistory" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="preferredHospital" reference="Hospitals" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="preferredHospital"
    label="preferredHospital"
    reference="Hospitals"
    alwaysOn
  />,
];
