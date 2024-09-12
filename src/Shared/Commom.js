import { bglightgray } from "./color";

export const flexcenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const flexbetween = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between;',
};

export const flexcoloumcenter = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};



export const flexcenterstart = {
  display: 'flex',
  alignItems: 'center',
};

export const normalinput = {
  borderRadius: '10px',
  backgroundColor: bglightgray,
  '&>div': {
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '13px',
    fontWeight: '500',
  },
  '&>div': {
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '13px',
    fontWeight: '500',
  },
  '&>div>input': {
    padding: '10px !important'
  },
  '&>div>fieldset': {
    border: 'none !important',
    borderRadius: '10px',
    marginLeft: '20px',
  },

}

export const selectinput = {
  width: '18%',
  borderRadius: '10px',
  backgroundColor: bglightgray,
  '&>div': {
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    padding: '10px 0px 10px 5px !important'
  },
  '&>div>fieldset': {
    border: 'none !important',
    borderRadius: '10px',
    marginLeft: '20px',
  },

}


export const passwordinput = {
  borderRadius: '10px',
  backgroundColor: bglightgray,
  '&>input': { padding: '10px', color: 'white' },
  '&>div>button': { padding: '0px', },
  '&>:hover': {
    backgroundColor: bglightgray, borderRadius: '10px 0px 0px 10px'
  },

}