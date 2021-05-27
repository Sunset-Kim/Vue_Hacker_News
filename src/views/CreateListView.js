import ListView from './ListView';
import bus from '../utils/bus';

export default function createListView(name) {
	return {
		// 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리

		// 컴포넌트이름정의
		name: name,
		// 라이프사이클훅 created 정의
		created() {
			bus.$emit('start:spinner');

			this.$store
				.dispatch('FETCH_LIST', this.$route.name)
				.then(() => {
					bus.$emit('end:spinner');
				})
				.catch(error => {
					console.log(error);
				});
		},
		// ListView를 렌더링 하는 렌더함수 등록
		render(createElement) {
			return createElement(ListView);
		},
	};
}
