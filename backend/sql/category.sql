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
-- Name: category_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category_category (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(100) NOT NULL,
    views integer NOT NULL,
    parent_id bigint
);


ALTER TABLE public.category_category OWNER TO postgres;

--
-- Name: category_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_category_id_seq OWNER TO postgres;

--
-- Name: category_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_category_id_seq OWNED BY public.category_category.id;


--
-- Name: category_category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_category ALTER COLUMN id SET DEFAULT nextval('public.category_category_id_seq'::regclass);


--
-- Data for Name: category_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category_category (id, name, slug, views, parent_id) FROM stdin;
3	Figma	figma	0	\N
2	Devops	devops	4	\N
1	Development	development	8	\N
7	React	react	110	\N
8	Angular	angular	42	\N
9	Express	express	33	\N
10	Javascript	javascript	212	\N
11	Typescript	typescript	132	\N
12	Firebase	firebase	323	\N
13	Supabase	supabase	223	\N
14	MySQL	mysql	11	\N
15	Php	php	44	\N
16	Django	django	77	\N
17	Nextjs	nextjs	76	\N
18	Astro	astro	86	\N
19	Redux	redux	323	\N
\.


--
-- Name: category_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_category_id_seq', 20, true);


--
-- Name: category_category category_category_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_category
    ADD CONSTRAINT category_category_name_key UNIQUE (name);


--
-- Name: category_category category_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_category
    ADD CONSTRAINT category_category_pkey PRIMARY KEY (id);


--
-- Name: category_category category_category_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_category
    ADD CONSTRAINT category_category_slug_key UNIQUE (slug);


--
-- Name: category_category_name_e3e43e48_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX category_category_name_e3e43e48_like ON public.category_category USING btree (name varchar_pattern_ops);


--
-- Name: category_category_parent_id_bce0763d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX category_category_parent_id_bce0763d ON public.category_category USING btree (parent_id);


--
-- Name: category_category_slug_4f83d5f6_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX category_category_slug_4f83d5f6_like ON public.category_category USING btree (slug varchar_pattern_ops);


--
-- Name: category_category category_category_parent_id_bce0763d_fk_category_category_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_category
    ADD CONSTRAINT category_category_parent_id_bce0763d_fk_category_category_id FOREIGN KEY (parent_id) REFERENCES public.category_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

