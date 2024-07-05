import { getPlaiceholder } from 'plaiceholder';
import getLocalBase64, { type BlurImageType } from '../getLocalBase64';
import fetchMock from 'jest-fetch-mock';
import { ResponseType } from "@/types"

jest.mock('plaiceholder', () => ({
  getPlaiceholder: jest.fn(),
}));

const getPlaiceholderMockFn = getPlaiceholder as jest.Mock

describe('getBase64', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const imageUrl = 'https://example.com/image.jpg';

  const mockSuccessResponse = {
    success: true,
    data: {
      src: imageUrl,
      blurDataURL: 'data:image/jpeg;base64,...',
      height: 600,
      width: 800,
    },
  } satisfies ResponseType<BlurImageType>;

  const mockFetchErrorResponse = {
    success: false,
    message: 'Failed to fetch',
  } satisfies ResponseType<BlurImageType>;

  const mockGetPlaiceholderErrorResponse = {
    success: false,
    message: 'getPlaiceholder error',
  } satisfies ResponseType<BlurImageType>;


  it('should return blurDataURL, imageUrl, height, and width on success', async () => {

    const mockResolveValue = {
      metadata: {
        height: 600,
        width: 800
      },
      base64: 'data:image/jpeg;base64,...'
    }

    fetchMock.mockResolvedValueOnce(new Response(new ArrayBuffer(8)));

    getPlaiceholderMockFn.mockResolvedValueOnce(mockResolveValue);

    const result = await getLocalBase64(imageUrl);

    expect(result).toEqual(mockSuccessResponse);
  });

  it('should handle fetch errors gracefully', async () => {

    fetchMock.mockRejectOnce(new Error('Failed to fetch'));

    const result = await getLocalBase64(imageUrl);

    expect(global.fetch).toHaveBeenCalledWith(imageUrl);

    expect(result).toEqual(mockFetchErrorResponse);
  });

  it('should handle getPlaiceholder errors gracefully', async () => {
    const mockBuffer = new ArrayBuffer(8)

    fetchMock.mockResolvedValueOnce(new Response(new ArrayBuffer(8)));
    getPlaiceholderMockFn.mockRejectedValue(new Error('getPlaiceholder error'));

    const result = await getLocalBase64(imageUrl);

    expect(global.fetch).toHaveBeenCalledWith(imageUrl);
    expect(getPlaiceholder).toHaveBeenCalledWith(Buffer.from(mockBuffer));

    expect(result).toEqual(mockGetPlaiceholderErrorResponse);
  });
});