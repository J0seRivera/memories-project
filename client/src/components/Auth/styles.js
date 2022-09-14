import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  paper: {
    /* marginTop: theme.spacing(8) */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px",
  },
  root: {
    '& .MuiTextField-root': {
      margin: '20px',
    },
  },
  avatar: {
    margin: '10px',
    backgroundColor: 'white'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '30px',
  },
  submit: {
    margin: '20px 0 20px !important',
    width: '100%'
  },
  googleButton: {
    marginBottom: '20px',
  },
}));