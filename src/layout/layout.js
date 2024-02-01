import Header from "../components/header"
import {View, Text} from 'react-native';
const Layout = props =>{
    return (<View style={{
        display:'flex',
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column'
    }}>
        <Header title="Movies App"/>
        {props.children}
    </View>)
}

export default Layout;