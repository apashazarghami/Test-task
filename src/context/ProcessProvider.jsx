import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
    modalStatus: 'hidden',
    processTitle: '',
    processIdentifier: '',
    processOwner: [],
    processViewer: [],
    processDescription: ''
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