import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormBlank = (props) => {
    return(
        <div className="form-blank__wrap">
            <form className="form-blank" id="form-sale30">
                <input className="form-blank__field" type="text" placeholder={'Имя*'} name="name" id="form-sale30__name"/>
                <MaskedInput id="form-sale30__phone" mask="+7(111) 111 11 11" type="text" placeholder={'Телефон*'} size={''} name="number" required="true" className="form-blank__field"/>
                <input className="btn" type="submit" value="Отправить"/>
            </form>
        </div>
    )
};

export default FormBlank;