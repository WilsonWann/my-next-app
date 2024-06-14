import 'react-copy-to-clipboard';

declare module 'react-copy-to-clipboard' {

  class CopyToClipboard extends React.PureComponent<Props> {}

  interface Options {
    debug?: boolean | undefined;
    message?: string | undefined;
    format?: string | undefined; // MIME type
  }

  interface Props {
    children?: React.ReactNode;
    className?: string;
    text: string;
    onCopy?(text: string, result: boolean): void;
    options?: Options | undefined;
  }
}