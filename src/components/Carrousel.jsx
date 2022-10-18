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
                    <Text style={styles.footerTextLeft}>{item.title}</Text>
                    <Text style={styles.footerTextRight}>{item.promo}</Text>
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
    footerTextLeft: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 30,
        backgroundColor: "#E6213D",
        width: 115,
        justifyContent: "center",
        textAlign: "center",
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
    },
    footerTextRight: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        paddingRight: 30,
        backgroundColor: "#E6213D",
        width: 115,
        justifyContent: "center",
        textAlign: "center",
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6,
        
    },
    dotView: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: -5,
        top: -25,
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