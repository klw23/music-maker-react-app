import axios from "axios";
const PLAYIST_API_URL = 'http://localhost:4000/playlists'

export const createPlaylist = async (newPlaylist) => {
    const response = await axios.post(PLAYIST_API_URL, newPlaylist)
    const playlist = response.data
    return playlist
}


export const findAllPlaylist = async () => {
    const response = await axios.get(PLAYIST_API_URL)
    const playlist = response.data
    return playlist
}

export const findPlaylistById = async (pid) => {
    const response = await axios.get(`${PLAYIST_API_URL}/${pid}`)
    return response.data
}

export const updatePlaylist = async () => {
}

export const addSongToPlaylist = async (pid, song) => {
    let newSong = {}
    newSong.artist_name = song.artists[0].name
    newSong.track_name = song.name
    newSong.track_id = song.artists[0].id
    newSong.duration = song.duration_ms
    newSong.album = song.album.name
    const response = await axios.post(`${PLAYIST_API_URL}/addSong/${pid}`, newSong)
    const playlist = response.data
    return playlist
}

export const removeSongFromPlaylist = async (pid, song) => {
    const response = await axios.patch(`${PLAYIST_API_URL}/removeSong/${pid}`, song)
    const playlist = response.data
    return playlist
}


export const deletePlaylist = async (pid) => {
    const response = await axios.delete(`${PLAYIST_API_URL}/${pid}`)
    const status = response.data
    return status;
}

export const findPlaylistForUser = async (uid) => {
    const response = await axios.get(`${PLAYIST_API_URL}/users/${uid}`)
    return response.data
}