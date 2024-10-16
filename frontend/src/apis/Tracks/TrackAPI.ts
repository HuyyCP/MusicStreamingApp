import instance from '~/axiosConfig'
import { ITrack } from '~/type/Tracks/ITrack'

export interface ITrackResponse {
  message: string
  result: {
    data: ITrack[]
  }
}

type TrackStatus = 'all' | 'pending' | 'available'

export const apiGetTracks = async (limit: number, page: number): Promise<ITrackResponse> => {
  const response = await instance.get<ITrackResponse>(`/tracks?limit=${limit}&page=${page}`)
  return response.data
}

export const apiGetTracksByArtist = async (limit: number, page: number, status: TrackStatus) => {
  const response = await instance.get<ITrackResponse>(`/tracks/my-tracks?limit=${limit}&page=${page}&status=${status}`)
  return response.data
}
