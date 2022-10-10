import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import carouselItem from "../../assets/carrousel.json";
const { width, height } = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export default function Carrousel() {
    let flatListRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)
    const onViewRef = useRef(({ changed }) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index)
        }
    });
    const scrollToIndex = (index) => {
        flatListRef.current?.scrollToIndex({animated: true, index: index})
    }
    const renderItems = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => console.log("clicked")}
                activeOpacity={1}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{item.title}</Text>
                    <Text style={styles.footerText}>{item.promo}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <FlatList
                data={carouselItem}
                renderItem={renderItems}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(ref) => {
                    flatListRef.current = ref;
                }}
                style={styles.carousel}
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dotView}>
                {carouselItem.map(({}, index) => (
                    <TouchableOpacity key={index.toString()}
                        style={[styles.circle, { backgroundColor: index === currentIndex ? "black" : "grey" },
                        ]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    carousel: {
        maxHeight: 300
    },
    image: {
        width,
        height: 250,
        resizeMode: "cover",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    footerText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 20,
        backgroundColor: "#E6213D",
        width: 80,
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 50,
    },
    dotView: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: -20,
        top: -10,
        alignItems: "center"
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: "black",
        borderRadius: 50,
        marginHorizontal: 5
    }
})