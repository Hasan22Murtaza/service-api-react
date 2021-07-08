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

export const socialReducer = (state, action) => {
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
        error: action.reason
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

export const checkinReducer = (state, action) => {
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

export const apiReducer = (state, action) => {
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

export const imageReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'DATA':
      return {
        ...state,
        loading: true,
        error: false,
        data: action.data,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false
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
