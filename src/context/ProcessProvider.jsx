import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
    modalStatus: 'hidden',
    processTitle: '',
    processIdentifier: '',
    processOwner: [],
    processViewer: [],
    processDescription: '',
    options: []
}

const processReducer = (state, { type, payload }) => {
    switch(type) {
        case 'GO_TO_STEP_ONE' :
            return {
                ...state,
                modalStatus: 'stepOne'
            }
        case 'GO_TO_STEP_TWO' :
            const { processDescription, processIdentifier, processOwner, processTitle, processViewer } = payload
            return {
                ...state,
                modalStatus: 'stepTwo',
                processTitle,
                processIdentifier,
                processOwner,
                processViewer,
                processDescription
            }
        case 'GO_TO_HOME' :
            return {
                ...state,
                modalStatus: 'hidden'
            }
        case "ADD_OPTION" :
            const repeatedOption = state.options.filter(item => item.id === payload.id)
            return {
                ...state,
                options: repeatedOption.length ? state.options : [...state.options, payload]
            }
        case "REMOVE_OPTION" :
            return {
                ...state,
                options: state.options.filter(item => item.id !== payload)
            }
        default : return state
    }
}

export const ProcessContext = createContext();

const ProcessProvider = ({ children }) => {
    const [state, dispatch] = useReducer(processReducer, INITIAL_STATE);
    return(
        <ProcessContext.Provider value={{ state, dispatch }}>
            {children}
        </ProcessContext.Provider>
    )
}

export default ProcessProvider;

const useProcess = () => useContext(ProcessContext);
export { useProcess }