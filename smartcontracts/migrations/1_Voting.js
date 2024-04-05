const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
    deployer.deploy(Voting, ["subham1", "subham2", "subham3"], 50)
}