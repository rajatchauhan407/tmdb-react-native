import React,{useState, useEffect} from 'react';
import { View, Text, Image, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import useFetch from '../hooks/useFetch';
import {keys} from '../config/keys';
import MovieCard from '../components/movie-card';
const TvShows = ({navigation}) => {
    const [tvItem, setTvItem] = useState('popular');
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/tv/${tvItem}`);
    const { data, isLoading, error, fetchData } = useFetch(url, 'GET', {
        headers: {
            Authorization: `Bearer ${keys.ACCESS_TOKEN}`,
        }
    });
    const TvItemsList = [
        {
            label:'Airing Today',
            value:'airing_today'
        },
        {
            label:'On the Air',
            value:'on_the_air'
        },
        {
            label:'Popular',
            value:'popular'
        },
        {
            label:'Top Rated',
            value:'top_rated'
        } 
    ]

    useEffect(() => {
        fetchData();
    }, [url]);

    return (
        <View style={{
            flex:1,
            backgroundColor:'#fff',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Picker
            selectedValue={tvItem}
            onValueChange={(itemValue, itemIndex) =>
                {
                setTvItem(itemValue);
                setUrl(`https://api.themoviedb.org/3/tv/${itemValue}`);
                }
            }
            style={{height: 40, width: 200, display:'flex', alignSelf:'center', marginTop:20}}
            >
                {TvItemsList.map((tItem, index) => {
                    return <Picker.Item key={index} label={tItem.label} value={tItem.value} />
                })}
            </Picker>
            <View style={{flex:1, width:'100%'}}>
                <FlatList
                    data={data?.results}
                    renderItem={({item}) => <MovieCard 
                    title={item.title || item.name}
                    posterPath={item.poster_path}
                    popularity={item.popularity}
                    releaseDate={item.release_date || item.first_air_date}
                    type="tv"
                    navigation={navigation}
                    id={item.id}
                />}
                keyExtractor={item => item.id}
            />
            </View>
            
        </View>
    )
}

export default TvShows;