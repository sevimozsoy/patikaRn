import React, { useState } from 'react';
import { View, Text, FlatList, Switch } from 'react-native';

const data = [
    { id: 0, name: 'Kafe1', isFavorite: true },
    { id: 1, name: 'Kafe2', isFavorite: false },
    { id: 2, name: 'Kafe3', isFavorite: false },
    { id: 3, name: 'Kafe4', isFavorite: true },
    { id: 4, name: 'Kafe5', isFavorite: false },
    { id: 5, name: 'Kafe6', isFavorite: false }

];

function State() {
    const [cafeList, setCafeList] = useState(data); // cafe'yi tuttuğumuz state
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false); //switch değişimlerini tuttuğumuz state

    const renderCafes = ({ item }) => <Text>{item.name}</Text>

    function onFavoritesChange(isFavoritesSelected) {
        setShowOnlyFavorites(isFavoritesSelected);
        isFavoritesSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
            : setCafeList(data);
    }

    return (
        <View>
            <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
            <FlatList data={cafeList} renderItem={renderCafes} />
        </View>
    )
}

export default State