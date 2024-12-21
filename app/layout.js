import { Header } from "./components/header/header"; // 헤더 컴포넌트 임포트
import "./globals.css"; // 전역 스타일 시트 임포트

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 필요 시 메타 태그와 스타일링 추가 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your website description" />
        <title>Next.js App</title>
      </head>
      <body>
        <Header /> {/* 헤더 컴포넌트 추가 */}
        {children} {/* 페이지별 콘텐츠 렌더링 */}
      </body>
    </html>
  );
}
