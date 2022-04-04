import React from "react";

const Blogs = () => {
  return (
    <section className="my-6">
      <h1 className="md:mb-6 text-3xl md:text-4xl text-center font-bold text-teal-700">
        Q & A
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            What is Context api?
          </h5>
          <p class="font-normal text-gray-700 text-justify">
            The React Context api is a system there we can pass data without
            props drilling parents to child components.Context api is very
            useful for large project or share data to child to child
            components.This featurse added in React version 16.3 that's makes
            coding is more powerfull. <br />
            React.createContext() is needed for create a Context api. use a
            variable to declare it and make sure to export this variable for use
            it to another components. it gives two things one is provider and
            another is consumer.provider is grandparent which contains all other
            components those are want to use data from grand components.
            Consumer is those components that consumes and uses the state.
            That's all I know.
          </p>
        </div>
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            What is Semantic Tags?
          </h5>
          <p class="font-normal text-gray-700 text-justify">
            Semantic element describes its meaning to both the browser and the
            developer.It is newly added in HTML5. before HTML5 HTML code like:
            &lt;div id="nav"&gt; &lt;div id="header"&gt; &lt;div id="footer"&gt;
            to indicate navigation, header, and footer. But in HTML5 we used
            some semantic tags because firstly, it is much easier to read and It
            has greater accessibility. semantic tags also lead to more
            consistent code.Html 4 provide one type of container that is DIV
            butt in HTML5 we got section and article that is more easily
            readable that is a section or that is a article part of code.
            &lt;nav&gt; tag means it is a navbar area &lt;footer&gt; tags used
            for a site footer that's carry a information about website
            footer.website main content are available in &lt;main&gt;
            tag.&lt;address&gt; tag used for write address. Some semantice tags
            are
            &lt;article&gt;,&lt;aside&gt;,&lt;details&gt;,&lt;figcaption&gt;,&lt;figure&gt;,&lt;footer&gt;,&lt;header&gt;,&lt;main&gt;,&lt;mark&gt;,&lt;nav&gt;,&lt;section&gt;,&lt;summary&gt;,&lt;time&gt;
          </p>
        </div>
        <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            What is Inline Block Elements?
          </h5>
          <p class="font-normal text-gray-700 text-justify">
            Mainly two type of display value is available one is block element
            and another is inline element. <br />
            Block level element is always takes up the full width available{" "}
            <br />
            Inline element don't take full width , it only takes up as much
            width as necessary and inline elements are sets beside one by one in
            a line. Now we are talking about inline block element what it is
            really? <br />
            It is mainly a combined version of block element and inline
            elemnts,firstly it behaves like inline elements but it can take full
            width height of a line like block element it also takes height as
            usually if anyone defined it.but inline elements can't did it.
            That's why this display value is called inline-block
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
