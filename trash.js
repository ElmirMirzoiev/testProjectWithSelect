const shouldLoad = useRef(true)

	useEffect(() => {
		if (shouldLoad.current) {
			shouldLoad.current = false
			axios.get(src).then(res => setArr(res.data))
		}
	}, [])

	const [arr, setArr] = useState([])