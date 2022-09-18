import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  //thay đổi định hướng của browser
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quotedata) => {
    // push: thực hiện chuyển sang page khác, cho phép quay trở lại = nút back
    // replace: thực hiện chuyển sang page khác, không thể quay lại
    sendRequest(quotedata);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
