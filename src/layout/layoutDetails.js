import Header from "../components/header"
import {View, Text} from 'react-native';

const LayoutDetails = props =>{
    return (<View style={{
        display:'flex',
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column',
    }}>
        <Header back={true} title={props.headerTitle}/>
        {props.children}
    </View>)
}

export default LayoutDetails;