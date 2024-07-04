// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import PortfolioCasePage from '../page';
// import Loading from '../loading';
// import PortfolioCase from '../components/PortfolioCase/PortfolioCase.component';
// import { getPortfolioCaseByName } from '@/app/action/getPortfolioCaseByName';
// import type { ErrorResponseType, PortfolioCaseType, SuccessResponseType } from '@/app/action/getPortfolioCaseByName';
// import { notFound } from 'next/navigation'
// import Image from 'next/image';

// jest.mock('../components/PortfolioCase/PortfolioCase.component', () =>
//   async ({ portfolioCase }: { portfolioCase: string }) => {

//     const response = await action.getPortfolioCaseByName(portfolioCase)
//     if (!response.success) throw new Error(response.message)
//     if (!response.data) notFound()

//     const { title, tags, images } = response.data

//     return (
//       <>
//         <section className={`flex flex-col justify-start items-start gap-2 text-secondary`}>
//           <h2 className="text-xl ">{title}</h2>
//           {tags.map((tag, index) => (
//             <span key={index}>{`# ${tag}`}</span>
//           ))}
//         </section>
//         {
//           images.map((image, index) => (
//             <div key={index} className="relative w-full h-[500px] overflow-clip">
//               <CustomImage image={image} fill />
//             </div>
//           ))
//         }
//       </>
//     )
//   }
// )

// jest.mock('@/app/action/getPortfolioCaseByName.ts', () => ({
//   getPortfolioCaseByName: jest.fn()
// }));
// jest.mock('@/app/components/CustomImage/CustomImage.component.tsx', () => ({
//   CustomImage: ({ image }: { image: string }) => <Image src={image} alt="" />
// }))

// jest.mock('next/navigation', () => ({
//   notFound: () => null
// }));

// jest.mock('../loading', () => ({
//   Loading: () => <div data-testid="portfolio-case-loading">Loading...</div>
// }));

// describe('PortfolioCasePage', () => {

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   const mockPortfolioCase = 'examplePortfolioCase'

//   const props = {
//     params: {
//       portfolioCase: mockPortfolioCase
//     }
//   }

//   const mockSuccessResponse = {
//     success: true,
//     data: {
//       name: mockPortfolioCase,
//       title: 'Test Portfolio Case',
//       tags: ['tag1', 'tag2'],
//       images: ['image1.jpg', 'image2.jpg'],
//     },
//   } satisfies SuccessResponseType<PortfolioCaseType>;

//   const mockNotFoundResponse = {
//     success: true,
//     data: null,
//   } satisfies SuccessResponseType<null>;

//   const mockErrorResponse = {
//     success: false,
//     message: 'Error fetching portfolio case',
//   } satisfies ErrorResponseType;

//   test('renders loading state initially', async () => {

//     (getPortfolioCaseByName as jest.Mock).mockResolvedValueOnce(mockSuccessResponse);
//     // (getPortfolioCaseByName as jest.Mock).mockImplementation(() =>
//     //   new Promise(resolve => setTimeout(() => resolve(mockSuccessResponse), 1000))
//     // );
//     const Result = await PortfolioCasePage(props)

//     render(Result);
//     // render(<PortfolioCasePage {...props} />);

//     waitFor(() => {
//       expect(screen.getByTestId('portfolio-case-loading')).toBeInTheDocument();
//     });
//   });

//   // test('renders portfolio case data', async () => {
//   //   (action.getPortfolioCaseByName as jest.Mock).mockImplementation(() =>
//   //     new Promise(resolve =>
//   //       setTimeout(() => resolve(mockSuccessResponse), 1000)
//   //     )
//   //   );

//   //   render(<PortfolioCasePage {...props} />);

//   //   await waitFor(() => {
//   //     expect(screen.getByText(mockPortfolioCase)).toBeInTheDocument();
//   //   });
//   //   expect(screen.getByText('# tag1')).toBeInTheDocument();
//   //   expect(screen.getByText('# tag2')).toBeInTheDocument();
//   //   expect(screen.getAllByAltText('Custom')).toHaveLength(3);
//   // });

//   // test('handles error state', async () => {
//   //   (action.getPortfolioCaseByName as jest.Mock).mockImplementation(() =>
//   //     new Promise(reject =>
//   //       setTimeout(() => reject(mockErrorResponse), 1000)
//   //     )
//   //   );

//   //   render(<PortfolioCasePage {...props} />);

//   //   await waitFor(() => {
//   //     expect(screen.getByText('Error fetching portfolio case')).toBeInTheDocument();
//   //   });
//   // });

//   // test('handles notFound state', async () => {
//   //   (getPortfolioCaseByName as jest.Mock).mockResolvedValueOnce({
//   //     success: true,
//   //     data: null,
//   //   });

//   //   render(<PortfolioCasePage params={mockParams} />);

//   //   await waitFor(() => {
//   //     expect(notFound).toHaveBeenCalled();
//   //   });
//   // });
// });
