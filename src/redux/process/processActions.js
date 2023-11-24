const goToStepOne = () => {
    return {
        type: 'GO_TO_STEP_ONE'
    }
}

const goToStepTwo = payload => {
    return {
        type: 'GO_TO_STEP_TWO',
        payload
    }
}

const goToHome = () => {
    return {
        type: 'GO_TO_HOME'
    }
}

const addOption = payload => {
    return {
        type: 'ADD_OPTION',
        payload
    }
}

const removeOption = payload => {
    return {
        type: 'REMOVE_OPTION',
        payload
    }
}

export { goToStepOne, goToStepTwo, goToHome, addOption, removeOption }