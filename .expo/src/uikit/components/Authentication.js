import React, {Component} from "react"
import t from "tcomb-form-native"
import { View, StyleSheet, Button, Text, ScrollView  } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation";
//Получаем Форму с api
const Form = t.form.Form

//Определяем Модель Юзера
const User = t.struct({
    email : t.String,
    password : t.String,
})


const options = {
    fields : {
        email: {
            error: "Введите часто используемую почту"
        },
        password: {
            error: "Выберите что-то, что вы используете на других сайтах или что-то, что вы не помните"
        },
    }
}

export default class Authentication extends Component {

    handleSubmit = () => {
        const value = this._form.getValue()
    }

    render () {
        const { container, contentContainerStyle } = styles
        return (
            <ScrollView contentContainerStyle={contentContainerStyle}>
                <View style={container}>
                    <Text>{/* Визуализируем форму передав ей параметром нашу модель как тип (type) */}</Text>
                    <Text>Авторизоваться</Text>
                    <Form 
                        type={User}
                        ref={ c => this._form = c }                        
                        // Идет передача параметров форме через реквизит
                        options={options}
                    /> 
                    {/* Берем данные с формы */}
                    <Button 
                        title="Зарегистрироваться" 
                        onPress={this.handleSubmit}
                    />
                </View>
            </ScrollView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      marginTop: 40,
      padding: 20,
      zIndex : 33,
      backgroundColor: "#ffffff",
    },
    contentContainerStyle : {

    }
});


