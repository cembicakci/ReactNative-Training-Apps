import { useState } from "react"
import { Alert, SafeAreaView, Text } from "react-native"
import Button from "../components/Button"
import Input from "../components/Input"

const MemberSignScreen = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);

    function handleSubmit() {

        if (!name || !surname || !age || !email || !city) {
            Alert.alert('Fitness Salonu', 'Bilgiler Boş Bırakılamaz')
            return;
        }

        const user = {
            name,
            surname,
            age,
            email,
            city
        }

        navigation.navigate('MemberResultScreen', { user })
    }

    return (
        <SafeAreaView>
            <Input label='Adı' placeholder={'Üyenin adı giriniz...'} onChangeText={setName} />
            <Input label='Soyadı' placeholder={'Üyenin soyismini giriniz...'} onChangeText={setSurname} />
            <Input label='Yaşı' placeholder={'Üyenin yaşını giriniz...'} onChangeText={setAge} />
            <Input label='E-posta' placeholder={'Üyenin e-posta adresini giriniz...'} onChangeText={setEmail} />
            <Input label='İl' placeholder={'Üyenin ilini giriniz...'} onChangeText={setCity} />
            <Button text={'Kaydı Tamamla'} onPress={handleSubmit}></Button>
        </SafeAreaView>
    )
}

export default MemberSignScreen