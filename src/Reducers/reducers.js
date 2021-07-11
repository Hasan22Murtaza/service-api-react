export const fanDataReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};

export const fanProfileReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};



export const eventsReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
export const eventReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};


export const profileReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};


export const vanuesReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
export const vanueReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};


export const fanLoginReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};

export const organizerLoginReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};

export const orgSettingReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};

export const orgEventsReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
export const orgEventReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};

export const orgEmployeesReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};