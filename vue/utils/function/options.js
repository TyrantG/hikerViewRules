const options = {
    radio: () => import('../../components/FormBuilder/Form/Radio'),
    select: () => import('../../components/FormBuilder/Form/Select'),
    checkbox: () => import('../../components/FormBuilder/Form/CheckBox'),
    input: () => import('../../components/FormBuilder/Form/Input'),
    'multi-input': () => import('../../components/FormBuilder/Form/MultiInput'),
    sort: () => import('../../components/FormBuilder/Form/Sort'),
    slider: () => import('../../components/FormBuilder/Form/Slider'),
    textarea: () => import('../../components/FormBuilder/Form/Textarea'),
    cascade: () => import('../../components/FormBuilder/Form/Select'),
    associate: () => import('../../components/FormBuilder/Form/Input'),
    date: () => import('../../components/FormBuilder/Form/Date'),
    time: () => import('../../components/FormBuilder/Form/Time'),
    'image-radio': () => import('../../components/FormBuilder/Form/ImageRadio'),
    upload: () => import('../../components/FormBuilder/Form/Upload'),
    fun: () => import('../../components/FormBuilder/Form/Radio'),
    sign: () => import('../../components/FormBuilder/Form/Sign'),
    'radio-group': () => import('../../components/FormBuilder/Form/RadioGroup'),
    'checkbox-group': () => import('../../components/FormBuilder/Form/CheckboxGroup'),
    'input-box': () => import('../../components/FormBuilder/Form/InputGroup'),
    'score-group': () => import('../../components/FormBuilder/Form/ScoreGroup'),
}

export default options
