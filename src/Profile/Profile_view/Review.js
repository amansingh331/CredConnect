import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import color from '../../Constant/color';
import Process from '../../Process/process';
import moment from 'moment';

const ReviewScreen = ({ route }) => {
    const userid = route.params.userid;
    const first_name = route.params.Fname;
    const navigation = useNavigation();
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [backiconColor, setbackIconColor] = useState('white');
    const [selectedFilter, setSelectedFilter] = useState('Recent');

    useFocusEffect(
        React.useCallback(() => {
            const checkLoginStatus = async () => {
                try {
                    const tempData = await Process.getReviewData(userid);
                    const sortedReviews = tempData.sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime));
                    setReviews(sortedReviews);
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    setLoading(false);
                }
            };
            checkLoginStatus();
        }, [navigation])
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={color.Buttoncolor} />
            </View>
        );
    }
    if (!reviews) {
        return null;
    }
    

    const filteredReviews = reviews.filter(review => {
        if (selectedFilter === 'Recent') return true;
        if (selectedFilter === '5 star') return Math.floor(review.Rating) === 5;
        if (selectedFilter === '4 star') return Math.floor(review.Rating) === 4;
        if (selectedFilter === '3 stars and below') return Math.floor(review.Rating) <= 3;
    });

    const calculateDaysAgo = (dateTime) => {
        return moment(dateTime).fromNow();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    onPressIn={() => setbackIconColor('gray')}
                    onPressOut={() => setbackIconColor('white')}
                >
                    <Icon name="chevron-back" size={24} color={backiconColor} />
                </Pressable>
                <Text style={styles.headerTitle}>{first_name + " reviews"}</Text>
            </View>
            <View style={styles.filterContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterRow}>
                    <Pressable
                        style={[styles.filterButton, selectedFilter === 'Recent' && styles.activeFilter]}
                        onPress={() => setSelectedFilter('Recent')}
                    >
                        <Text style={styles.filterText}>Recent</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.filterButton, selectedFilter === '5 star' && styles.activeFilter]}
                        onPress={() => setSelectedFilter('5 star')}
                    >
                        <Text style={styles.filterText}>5 star</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.filterButton, selectedFilter === '4 star' && styles.activeFilter]}
                        onPress={() => setSelectedFilter('4 star')}
                    >
                        <Text style={styles.filterText}>4 star</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.filterButton, selectedFilter === '3 stars and below' && styles.activeFilter]}
                        onPress={() => setSelectedFilter('3 stars and below')}
                    >
                        <Text style={styles.filterText}>3 stars and below</Text>
                    </Pressable>
                </ScrollView>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {filteredReviews.map((review, index) => (
                    <View key={index} style={styles.reviewCard}>
                        <Image source={{ uri: review.ProfilePic }} style={styles.profileImage} />
                        <View style={styles.reviewTextContainer}>
                            <Text style={styles.name}>{`${review.Fname} ${review.Lname}`}</Text>
                            <View style={styles.ratingRow}>
                                {Array.from({ length: Math.floor(review.Rating) }).map((_, index) => (
                                    <Icon key={index} name="star" size={14} color="orange" />
                                ))}
                                <Text style={styles.daysAgo}>{calculateDaysAgo(review.DateTime)}</Text>
                            </View>
                            <Text style={styles.reviewGivenFor}>{review.ReviewMsg}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgroundcolor,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: color.headercolor,
        elevation: 5,
    },
    headerTitle: {
        color: 'white',
        fontSize: 17,
        marginLeft: 10,
    },
    filterContainer: {
        paddingVertical: 10,
        backgroundColor: color.backgroundColor,
        marginBottom: 10
    },
    filterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    filterButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#333',
        marginRight: 10,
    },
    activeFilter: {
        backgroundColor: color.Buttoncolor,
    },
    filterText: {
        color: 'white',
        fontSize: 14,
    },
    scrollContainer: {
        paddingHorizontal: 15,
    },
    reviewCard: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    reviewTextContainer: {
        flex: 1,
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    daysAgo: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 10,
    },
    reviewGivenFor: {
        color: 'gray',
        fontSize: 12,
        marginTop: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backgroundcolor,
    },
});

export default ReviewScreen;
