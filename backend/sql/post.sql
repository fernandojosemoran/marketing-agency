--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blog_post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blog_post (
    id bigint NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    thumbnail character varying(500) NOT NULL,
    description text NOT NULL,
    published timestamp with time zone NOT NULL,
    views integer NOT NULL,
    time_stamp integer NOT NULL,
    category_id bigint NOT NULL,
    content text NOT NULL,
    status character varying(10) NOT NULL
);


ALTER TABLE public.blog_post OWNER TO postgres;

--
-- Name: blog_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blog_post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blog_post_id_seq OWNER TO postgres;

--
-- Name: blog_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blog_post_id_seq OWNED BY public.blog_post.id;


--
-- Name: blog_post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post ALTER COLUMN id SET DEFAULT nextval('public.blog_post_id_seq'::regclass);


--
-- Data for Name: blog_post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blog_post (id, title, slug, thumbnail, description, published, views, time_stamp, category_id, content, status) FROM stdin;
1	Make flutter app	make-flutter-app	upload/blog/Make flutter app/Blue-hackthebox.png	Flutter hopes this directory is useful for customers seeking consultants with Flutter experience; however, Flutter makes no representation to you or anyone else that the listed consultants are Flutter or Google partners, and Flutter does not repre	2024-07-15 16:19:33-07	7	5	1	<p><img alt="flutter-logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.10RECXGTH5NyaeBg5yD1pwHaDp%26pid%3DApi&amp;f=1&amp;ipt=1bf69d566a7cba029474794cf22e3adfe7289713f4740b9c846959b625d8b88b&amp;ipo=images" style="height:233px; width:474px" /></p>\r\n\r\n<p>Flutter is an open-source UI software development kit created by Google.&nbsp;It can be used to develop cross platform applications from a single codebase for the web, Fuchsia, Android, iOS, Linux, macOS, and Windows.</p>	published
5	Config jest in angular	config-jest-in-angular	upload/blog/Config jest in angular/wallpaperflare.com_wallpaper8.jpg	Angular is a popular and powerful framework for building web applications of any scale. Learn about its features, community, and latest release of Angular v18.	2024-12-18 20:45:34-08	20	3434	8	<p><img alt="jest installation for angular" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oZEK--ykWUeVcRWtgFe99gHaEK%26pid%3DApi&amp;f=1&amp;ipt=1141a7d7b35a836421df34b18f855bb6500ec57a4325a68a54d74dfc767c8ee7&amp;ipo=images" style="height:266px; width:474px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Angular is a TypeScript-based free and open-source single-page web application framework.&nbsp;It is developed by Google and by a community of individuals and corporations.&nbsp;Angular is a complete rewrite from the same team that built AngularJS.&nbsp;The Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.&nbsp;According to the Stack Overflow Developer Survey, Angular is one of the most commonly used web frameworks.&nbsp;</p>	published
9	How use firebase in react	how-use-firebase-in-react	upload/blog/How use firebase in react/movie-guardians-of-the-galaxy-vol-2-baby-groot-groot-wallpaper-preview.jpg	Firebase was a company that developed backend software. It was founded in San Francisco in 2011 and was incorporated in Delaware. In 2014, Firebase was bought by Google. Its name continues as a set of backend cloud computing services and application devel	2024-12-18 20:57:24-08	234	23333000	12	<p><img alt="firebase logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vyhsTqYglboneJrwkM6PJAHaDy%26pid%3DApi&amp;f=1&amp;ipt=4257e25ea55c71bd5edd64cd4ee75a465d1b578ea3e5494d0c78f15fea03cddc&amp;ipo=images" style="height:246px; width:482px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Firebase</strong>&nbsp;is a platform that helps you build and run modern, AI-powered apps with Google Cloud infrastructure and tools. Learn how to integrate&nbsp;<strong>Firebase</strong>&nbsp;with your favorite products, platforms, and languages, and explore solutions for common app development challenges.</p>	published
8	Creating a backend using express	creating-a-backend-using-express	upload/blog/Creating a backend using express/1315337.jpeg	Latest news, showbiz, sport, comment, lifestyle, city, video and pictures from the Daily Express and Sunday Express newspapers and Express.co.uk	2024-12-18 20:55:31-08	234	10000	9	<p><img alt="express logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CLf2MbiumJ4rjRvaZtMWigHaEK%26pid%3DApi&amp;f=1&amp;ipt=ea5265146317c94e1508aa8e9769efdd84edded40e3e86c3c38eb2666874fe20&amp;ipo=images" style="height:266px; width:474px" /></p>\r\n\r\n<p><strong>INTERNAL SERVER ERROR</strong> We&#39;re working on ironing out this wrinkle. <span data-darkreader-inline-color="" style="--darkreader-inline-color:#45fcd8; color:#1abc9c">SHOP WOMEN&#39;S SHOP MEN&#39;S TRY AGAIN SHOP MEN&#39;S TRY AGAIN</span></p>	published
7	How use the arrays in javascript	How-use-the-arrays-in-javascript	upload/blog/How use the arrays in javascript/119152.jpg	The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.	2024-12-18 20:51:25-08	100	111222	10	<p><img alt="javascript array" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.w6bGJs2cy56icUsn97vBswHaEP%26pid%3DApi&amp;f=1&amp;ipt=5f806f0a9ecba3050ae98f0733d1b9c48b5723ef402796151c83daac6d0c17be&amp;ipo=images" style="height:271px; width:474px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Learn how to create, access, modify and use&nbsp;<strong>arrays</strong>&nbsp;in JavaScript.&nbsp;<strong>Arrays</strong>&nbsp;are special variables that can hold more than one value and have built-in properties and methods.</p>	published
2	Design a app from 0	desing-a-app-from-0	upload/blog/design a app from 0/67.jpg	Figma is a platform that helps design and development teams build great products, together. It offers features such as design systems, AI-generated mockups, prototypes, code translation, and more.	2024-12-18 01:37:53-08	21	2	3	Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows	published
3	Deploying a  aplication in aws	deploying-a-aplication-in-aws	upload/blog/Deploying a  aplication in aws/30797.jpg	Build and run on-demand Apple workloads on AWS, the only major cloud provider to offer macOS. Build Mobile and Web Apps Fast. Add authentication and data syncing with AWS Amplify in just a few lines of code. Amazon DocumentDB (with MongoDB compatibility)	2024-12-18 01:39:33-08	41	12	2	<p><img alt="aws with react" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1BmoaTLL-yvxmxEjhpu87QHaFj%26pid%3DApi&amp;f=1&amp;ipt=97b27106dac13bb740e5652da77ba124501d7590f8ba4a1b2dc5ea9fb0b7269a&amp;ipo=images" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.</p>	published
10	django	django	upload/blog/django/185464.jpg	django	2024-12-21 00:07:24-08	1212	10000000	16	DJANGO	published
6	Creating a pwa with react	creating-a-pwa-with-react	upload/blog/Creating a pwa with react/wallpaperflare.com_wallpaper12.jpg	Learn how progressive web apps (PWAs) combine the best features of websites and platform-specific apps. PWAs are built using web technologies, but provide a user experience like that of a native app, with features like offline and background operation, de	2024-12-18 20:48:54-08	434	12122	7	<p><img alt="progressive web app with react" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HaH1ouIjkZr-v1-rRsYrVQHaDg%26pid%3DApi&amp;f=1&amp;ipt=7a49a7dc1332bcb1bbf2ef06883e4ebdf1ddd76918fc1fc3a244c6883cf98d40&amp;ipo=images" style="height:224px; width:474px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>A progressive web application, or progressive web app, is a type of web app that can be installed on a device as a standalone application.&nbsp;PWAs are installed using the offline cache of the device&#39;s web browser.</p>	published
4	How config redux in a next project	how-config-redux-in-a-next-project	upload/blog/How config redux in a next project/wallpaperflare.com_wallpaper1.jpg	The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template.. Both of these already have Redux	2024-12-18 20:43:01-08	344	323	19	<p><img alt="redux logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yHO9EA1tfmLQoatRkVA4_AHaFj%26pid%3DApi&amp;f=1&amp;ipt=9dd71aafbc8178f2af97d946893bb15c7803a0ceeb521c96e144a308ed552581&amp;ipo=images" style="height:355px; width:474px" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Redux</strong>&nbsp;helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Centralized. Centralizing your application&#39;s state and logic enables powerful capabilities like undo/redo, state persistence, and much more.</p>	published
\.


--
-- Name: blog_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blog_post_id_seq', 10, true);


--
-- Name: blog_post blog_post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post
    ADD CONSTRAINT blog_post_pkey PRIMARY KEY (id);


--
-- Name: blog_post blog_post_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post
    ADD CONSTRAINT blog_post_slug_key UNIQUE (slug);


--
-- Name: blog_post_category_id_c326dbf8; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX blog_post_category_id_c326dbf8 ON public.blog_post USING btree (category_id);


--
-- Name: blog_post_slug_b95473f2_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX blog_post_slug_b95473f2_like ON public.blog_post USING btree (slug varchar_pattern_ops);


--
-- Name: blog_post blog_post_category_id_c326dbf8_fk_category_category_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blog_post
    ADD CONSTRAINT blog_post_category_id_c326dbf8_fk_category_category_id FOREIGN KEY (category_id) REFERENCES public.category_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

