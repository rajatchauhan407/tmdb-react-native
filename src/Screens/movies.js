import React,{useState, useEffect} from "react";
import {View, Text, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import useFetch from "../hooks/useFetch";
import {keys} from "../config/keys";
import MovieCard from "../components/movie-card";

const Movie = props =>{
    const [genre, setGenre] = useState('popular');
    
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/${genre}`);

    const { data, isLoading, error, fetchData } = useFetch(url, 'GET', {
        headers: {
            Authorization: `Bearer ${keys.ACCESS_TOKEN}`,
        }
    });
    
    useEffect(() => {
        fetchData();
    }, [url]);

    const GenreList = [
        {
            label:'Now Playing',
            value:'now_playing'
        },
        {
            label:'Popular',
            value:'popular'
        },
        {
            label:'Top Rated',
            value:'top_rated'
        },
        {
            label:'Upcoming',
            value:'upcoming'
        },
        
    ]
    if (isLoading) {
        return <View style={{
            flex:1,
            backgroundColor:'#fff',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Loading...</Text>
        </View>
    }
    if (error) {
        return <View style={{
            flex:1,
            backgroundColor:'#fff',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>{error}</Text>
        </View>
    }
    return <View style={{
        display:'flex',
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column'
    }}>
        <Picker
            selectedValue={genre}
            onValueChange={(itemValue, itemIndex) =>
                {
                setGenre(itemValue);
                setUrl(`https://api.themoviedb.org/3/movie/${itemValue}`);
                }
            }
            style={{height: 40, width: 200, display:'flex', alignSelf:'center', marginTop:20}}
            >
            {GenreList.map((genre, index) => {
                return <Picker.Item key={index} label={genre.label} value={genre.value} />
            })}
        </Picker>
        
        <FlatList
            data={data?.results}
            renderItem={({item}) => <MovieCard 
            title={item.title}
            posterPath={item.poster_path}
            popularity={item.popularity}
            releaseDate={item.release_date}
            navigation={props.navigation}
            id = {item.id}
            type="movie"
            />}
            keyExtractor={item => item.id}
           
        />
    </View>

}

export default Movie;