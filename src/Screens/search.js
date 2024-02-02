import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet,FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../components/button';
import MovieCard from '../components/movie-card';
import useFetch from '../hooks/useFetch';
import {keys} from '../config/keys';
const Search = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [type, setType] = useState('movie');
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/search/${type}?query=${searchText}`);

    const { data, isLoading, error, fetchData } = useFetch(url, 'GET', {
        headers: {
            Authorization: `Bearer ${keys.ACCESS_TOKEN}`,
        }
    });
    
    function search(){
        setUrl(`https://api.themoviedb.org/3/search/${type}?query=${searchText}`);
        fetchData();
    }

    return (
        
        <View style={{flex:1,justifyContent:'center'}}>
        <View style={{marginHorizontal:50}}>
        
            <Text>Search Movie/TV Show name <Text style={{color:'red'}}>*</Text></Text>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>{setSearchText(text)}}
                value={searchText}
            />
            <Text>Choose Search Type <Text style={{color:'red'}}>*</Text></Text>
            <View style={{flexDirection:'row'}}>
                <Picker
                    selectedValue={type}
                    onValueChange={(itemValue, itemIndex) =>
                    { 
                        setType(itemValue);
                       
                        }
                    }
                    style={styles.picker}
                    >
                    <Picker.Item label="Movie" value="movie" />
                    <Picker.Item label="Multi" value="multi" />
                    <Picker.Item label="TV" value="tv" />
                </Picker>
                <CustomButton 
                    title="Search" 
                    onPress={search}
                    buttonStyle={{backgroundColor:'#095BB1',borderRadius:5}}
                    />
            </View>
                
        </View>
            { !data?.results.length>0 ? <View
                style={{
                    display:'flex',
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop:30,
                    marginVertical:'auto',
                }}  
            >
                <Text
                    style={{
                        fontSize:20,
                        fontWeight:'bold',

                    }}
                >Please Initiate a search</Text>
            </View> : 
            <View
                style={{
                    display:'flex',
                    flex:1,
                    paddingTop:30
                }}      
            >
            <FlatList
                data={data?.results}
                renderItem={({item}) => <MovieCard 
                title={item.title || item.name}
                posterPath={item.poster_path}
                popularity={item.popularity}
                releaseDate={item.release_date || item.first_air_date}
                id = {item.id }
                type={type }
                navigation={navigation}
            />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={true}
        />
            </View>
            
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 4,
    },
    picker:{
        flex:1,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        width:100,
        marginRight:10
    }
});

export default Search;