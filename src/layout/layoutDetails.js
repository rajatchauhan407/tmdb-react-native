import Header from "../components/header"
import {View, Text} from 'react-native';

const LayoutDetails = props =>{
    return (<View style={{
        display:'flex',
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column'
    }}>
        <Header title={'Movies Details'}/>
        {props.children}
    </View>)
}

export default LayoutDetails;