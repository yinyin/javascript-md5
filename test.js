(function() {
	test("hello", function() {
		var digest = md5("hello");
		equal(digest, "5d41402abc4b2a76b9719d911017c592", "digest of string 'hello'");
	});
	test("fox and dog", function() {
		var digest = md5("The quick brown fox jumps over the lazy dog");
		equal(digest, "9e107d9d372bb6826bd81d3542a419d6", "digest of string 'The quick brown fox jumps over the lazy dog'");
	});
	test("Taiwan", function() {
		var digest = md5("臺灣");
		equal(digest, "da3e75c1fd90b031e10c09add2724575", "digest of string 'Taiwan'");
	});
})();


// vim: ts=4 sw=4 ai nowrap